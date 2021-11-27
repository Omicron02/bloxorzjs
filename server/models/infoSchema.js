import mongoose from "mongoose"

let infoSchema = new mongoose.Schema
({
    name: {type: String, unique: true},
    password: {type: String},
    maxlvl: {type: Number, default: 1}, 
    moves: {type: Array, default: Array(10).fill(0)}
})

export default mongoose.model("details", infoSchema)
