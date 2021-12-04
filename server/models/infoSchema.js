import mongoose from "mongoose"

let infoSchema = new mongoose.Schema
({
    name: {type: String, unique: true},
    password: {type: String},
    moves: {type: Number, default: 0}, 
    
})

export default mongoose.model("details", infoSchema)
