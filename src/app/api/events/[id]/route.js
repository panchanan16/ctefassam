import { prisma } from "@/config/db.config";
import { saveFile } from "@/lib/flieUpload";
import { NextResponse } from "next/server";




export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const formData = await req.formData();
    const updateData = {};

    const fields = ["title", "date", "time", "venue", "platform", "collaboration"];
    fields.forEach(field => {
      const value = formData.get(field);
      if (value !== null) updateData[field] = value;
    });


    const imageFile = formData.get("image");
    if (imageFile && typeof imageFile !== 'string') {
      updateData.image = await saveFile(imageFile, "webevents");
    }

    const updatedEvent = await prisma.event.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE: Remove an event
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: "Event deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}