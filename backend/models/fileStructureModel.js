import mongoose from "mongoose"

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['folder', 'file'],
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File", // Reference to another File document
        default: null,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to User model (if files are owned by users)
    }
}, { timestamps: true });



export default mongoose.model("File", fileSchema);

