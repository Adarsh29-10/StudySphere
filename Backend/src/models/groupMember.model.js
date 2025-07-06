import mongoose, {Schema} from 'mongoose'

const GroupMemberSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    group_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Group", 
        required: true 
    },
    joined_at: { 
        type: Date, 
        default: Date.now 
    },
    role: { 
        type: String, 
        enum: ["admin", "member"], 
        default: "member"
    }
});

export const GroupMember = mongoose.model("GroupMember", GroupMemberSchema);
