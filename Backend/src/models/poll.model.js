

// // models/Poll.js
// const PollSchema = new mongoose.Schema({
//   group_id: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
//   created_by: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
//   question: { type: String, required: true },
//   created_at: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Poll", PollSchema);


// // models/PollOption.js
// const PollOptionSchema = new mongoose.Schema({
//   poll_id: { type: mongoose.Schema.Types.ObjectId, ref: "Poll", required: true },
//   option_text: { type: String, required: true }
// });

// module.exports = mongoose.model("PollOption", PollOptionSchema);


// // models/PollVote.js
// const PollVoteSchema = new mongoose.Schema({
//   poll_id: { type: mongoose.Schema.Types.ObjectId, ref: "Poll", required: true },
//   option_id: { type: mongoose.Schema.Types.ObjectId, ref: "PollOption", required: true },
//   voted_by: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true }
// });

// module.exports = mongoose.model("PollVote", PollVoteSchema);
