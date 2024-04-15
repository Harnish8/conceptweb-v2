import connectMongoDB from "../../../../libs/mongodb";
import Card from "../../../../models/card";
import { NextResponse } from "next/server"
import _middleware from "../_middleware"


export async function POST(request) {
    const { cardtitle, carddescription, cardimg } = await request.json();
    await connectMongoDB();
    await Card.create({ cardtitle, carddescription, cardimg });
    return NextResponse.json({ message: "Card Created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const cards = await Card.find();
    return NextResponse.json({ cards })
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const cardid = await Card.findById(id);
    return NextResponse.json({ cardid });
}


