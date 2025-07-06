import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: true
    },
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String
    },
    type: {
        type: String,
        enum: ["text", "image", "file"],
        default: "text"
    },
    sent_at: {
        type: Date,
        default: Date.now
    }
});

export const Messages = mongoose.model("Messages", MessageSchema);
