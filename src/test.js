const mongoose = require("mongoose")
const leaderboardSchema = require("../models/leaderboardSchema")

const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.SRV,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>
    {
        console.log("Database connection successful!")
    }).catch( e =>
    {
        console.log(e)
    })

async function leaderboardCreate(name,password)
{
    await leaderboardSchema.findOneAndUpdate
    (
        {name: name}, 
        {name: name, password: password},
        {upsert: true}
    )
}

async function leaderboardUpdate(name,moves,index)
{
    await leaderboardSchema.findOneAndUpdate
    (
        {name: name}, 
        {$set: {[`moves.${index}`]: moves}}
    )
}
//leaderboardCreate("Pranav","hye")
//leaderboardUpdate("Rahul",35,5)
