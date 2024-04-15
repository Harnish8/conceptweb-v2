import connectMongoDB from "../../../../libs/mongodb";
import Simulation from "../../../../models/simulation";
import { NextResponse } from "next/server"
import _middleware from "../_middleware"


export async function POST(request) {
    const { animationdata, simulationdata, theorydata, mcqdata, proceduredata } = await request.json();
    await connectMongoDB();
    await Simulation.create({ animationdata, simulationdata, theorydata, mcqdata, proceduredata });
    return NextResponse.json({ message: "Data Upload" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const simulations = await Simulation.find();
    return NextResponse.json({ simulations })
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const simulationsid = await Simulation.findById(id);
    return NextResponse.json({ simulationsid });
}


