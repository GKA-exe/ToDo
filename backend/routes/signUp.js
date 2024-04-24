const Joi = require("joi")
const express = require("express")

const router = express.Router()

router.post("/", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).require(),
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(6).max(200).required()
    })

    const { error } = schema.validate(req.body)
    
    if(error) return res.status(400).send()
})