import mongoose, {Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const groupSchema = new Schema(
    {
        group_name:  {
            type: String,   
            trim:true, 
            required: true,
        },
        group_description: {
            type: String, 
            required: true, 
            trim:true, 
        },
        
        members: {
            type: [String],
        },

        admin: {
            type: String, 
        },

        created_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true
        },

        created_at: { 
            type: Date, 
            default: Date.now 
        },

        group_type: { 
            type: String,
            enum: ["public", "private"],
            default: "public" 
        }
    },
    {
        timestamps: true
    }
)

export const Group = mongoose.model("Group", userSchema)