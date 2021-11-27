import express from "express"
import infoSchema from "./models/infoSchema.js"
const router = express.Router()

router.post("/signup", async (req, res) =>
{
    await infoSchema.create({name: req.body.username, password: req.body.password})
    .then( () => console.log("New user added successfully!"))
    .catch( e => console.log(e))
})

export default router