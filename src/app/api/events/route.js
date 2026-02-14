import { NextResponse } from "next/server";
import { prisma } from "@/config/db.config";
import { saveFile } from "@/lib/flieUpload";

// GET: Fetch all events with pagination
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const [events, totalCount] = await Promise.all([
      prisma.event.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.event.count(),
    ]);

    return NextResponse.json({
      data: events,
      meta: {
        totalItems: totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

// POST: Create a new event with image upload
export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const title = formData.get("title");
    const date = formData.get("date");
    const time = formData.get("time");
    const venue = formData.get("venue");
    const platform = formData.get("platform");
    const collaboration = formData.get("collaboration");
    const imageFile = formData.get("image");

    if (!title || !imageFile) {
      return NextResponse.json({ error: "Title and Image are required" }, { status: 400 });
    }

    const imageUrl = await saveFile(imageFile, "webevents");

    const newEvent = await prisma.event.create({
      data: {
        title,
        date,
        time,
        venue,
        platform,
        collaboration,
        image: imageUrl,
      },
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}