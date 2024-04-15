import { mongoose } from "mongoose";

const  connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://103.190.26.133:27017/Concept")
        // await mongoose.connect("mongodb://localhost:27017/Concept")
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log(error);
    }
};


export default connectMongoDB;
