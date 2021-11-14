import mongoose from "mongoose"

let leaderboardSchema = new mongoose.Schema
({
    name: {type: String, unique: true},
    password: {type: String},
    maxlvl: {type: Number},
    moves: {type: Array, default: Array(10).fill(0)}
})

export default mongoose.model("leaderboards", leaderboardSchema)
