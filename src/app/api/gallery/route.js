import { NextResponse } from "next/server";
import { saveFile } from "@/lib/flieUpload";
import { prisma } from "@/config/db.config";


// GET: Fetch all gallery items
export async function GET(req) {
    try {
        // 1. Get query parameters from the URL (defaults: page 1, limit 10)
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;

        // 2. Calculate how many items to skip
        const skip = (page - 1) * limit;

        // 3. Fetch data and total count in parallel for better performance
        const [items, totalCount] = await Promise.all([
            prisma.gallery.findMany({
                skip: skip,
                take: limit,
                orderBy: { createdAt: "desc" }, 
            }),
            prisma.gallery.count(),
        ]);

        // 4. Return data along with pagination metadata
        return NextResponse.json({
            data: items,
            meta: {
                totalItems: totalCount,
                totalPages: Math.ceil(totalCount / limit),
                currentPage: page,
                limit: limit,
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Pagination Error:", error);
        return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 });
    }
}

// POST: Create a new gallery item
export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get("title");
        const date = formData.get("date");
        const file = formData.get("photo");
        if (!file || !title) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Save file to disk
        const photoUrl = await saveFile(file, "webgallery");

        const newItem = await prisma.gallery.create({
            data: {
                title,
                photo: photoUrl,
                date: date ? new Date(date) : new Date(),
            },
        });

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}