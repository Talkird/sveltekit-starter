import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(import.meta.env.VITE_MONGODB_URI!);

    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error);
    }
}

export default connectMongo;