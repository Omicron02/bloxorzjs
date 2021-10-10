const mongoose = require("mongoose");

let leaderboardSchema = new mongoose.Schema
({
    name: {type: String, unique: true},
    password: {type: String},
    moves: {type: Array, default: Array(10).fill(0)}
})

module.exports = mongoose.model("leaderboards", leaderboardSchema)
