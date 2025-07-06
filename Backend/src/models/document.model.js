import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: true,
    },
    uploaded_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    doc_url: {
        type: String,
        required: true,
    },
    doc_name: {
        type: String,
    },
    uploaded_at: {
        type: Date,
        default: Date.now,
    },
});

export const Document = mongoose.model("Document", DocumentSchema);
