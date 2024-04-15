import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema(
    {
        cardtitle: String,
        carddescription: String,
        cardimg: String
    }, {
        timestamps: true,
    }
);



const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;