import mongoose from "mongoose";


const LinkSchema = new mongoose.Schema({
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: true,
    },
    shared_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    shared_at: {
        type: Date,
        default: Date.now,
    },
});

export const Link = mongoose.model("Link", LinkSchema);
