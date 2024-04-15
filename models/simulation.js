import mongoose, { Schema } from "mongoose";

const simulationSchema = new Schema(
    {
        animationdata: String,
        simulationdata: String,
        theorydata: String,
        mcqdata: String,
        proceduredata: String
    }, {
    timestamps: true,
}
);



const Simulation = mongoose.models.Simulation || mongoose.model("Simulation", simulationSchema);

export default Simulation;