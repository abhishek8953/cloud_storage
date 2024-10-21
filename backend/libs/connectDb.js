import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const res = await mongoose.connect(process.env.DB_URL);
		console.log("DB connected");
	} catch (err) {
        console.log("db error");
    }
};
