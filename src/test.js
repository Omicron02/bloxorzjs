import leaderboardSchema from "./models/leaderboardSchema"
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
export default leaderboardCreate 
export default leaderboardUpdate

