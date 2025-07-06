import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: true
    },
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        enum: ["video", "audio"],
        required: true
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date
    },
    meeting_link: {
        type: String
    }
});

export const Meeting = mongoose.model("Meeting", MeetingSchema);
