import { NextResponse } from "next/server";
import { saveFile } from "@/lib/flieUpload";
import { prisma } from "@/config/db.config";


// DELETE: Remove an item
export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await prisma.gallery.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}

// PATCH: Update an existing item
export async function PATCH(req, { params }) {
    try {
        const { id } = await params;
        const formData = await req.formData();

        let updateData = {};
        const title = formData.get("title");
        const date = formData.get("date");
        const file = formData.get("photo");

        if (title) updateData.title = title;
        if (date) updateData.date = new Date(date);

        if (file && typeof file !== 'string') {
            updateData.photo = await saveFile(file, "webgallery");
        }

        const updatedItem = await prisma.gallery.update({
            where: { id: parseInt(id) },
            data: updateData,
        });

        return NextResponse.json(updatedItem, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
}