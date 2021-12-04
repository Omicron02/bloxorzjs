import express from "express"
import infoSchema from "./models/infoSchema.js"
const router = express.Router()

router.post("/readDB", async (req, res) => 
{
    await infoSchema.findOne({name: req.body.username})
    .then( item => res.json(item))
    .catch( e => console.log(e))
})
router.post("/writeDB", async (req, res) =>
{
    await infoSchema.create({name: req.body.username, password: req.body.password})
    .then( () => console.log("New user added successfully!"))
    .catch( e => console.log(e))
})
router.get("/readallDB" , async(req,res)=>
{
    await infoSchema.find({})
    .then( item => res.json(item))
    .catch( e => console.log(e))
})

export default router