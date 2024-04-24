const { Todo } = require("../models/todo")
const express = require("express")
const Joi = require("joi")
const router = express.Router()


//GET requests
router.get("/", async(req, res) => {
    try {
        const todos = await Todo.find()
            .sort({ date: -1 });
        res.send(todos);
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)

    }
})

//POST requests
router.post("/", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3).max(30),
        uid: Joi.string(),
        isComplete: Joi.boolean(),
        date: Joi.date()
    })

    const {error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const {name, author, isComplete, date, uid} = req.body
    let todo = new Todo({ name, author, isComplete, date, uid });

    try {
        todo = await todo.save();
        res.send(todo)
    } catch (error){
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

//PUT requests
router.put("/:id", async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(200).required(),
      author: Joi.string().min(3).max(30),
      uid: Joi.string(),
      isComplete: Joi.boolean(),
      date: Joi.date(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
      const todo = await Todo.findById(req.params.id);

      if (!todo) return res.status(404).send("Todo not found...");

      const { name, author, isComplete, date, uid } = req.body;

      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          name,
          author,
          isComplete,
          date,
          uid,
        },
        { new: true }
      );
      res.send(updatedTodo);
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }

})


//Patch is mostly not needed.
router.patch("/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).send("Todo not found...");

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
          isComplete: !todo.isComplete,
        });
        res.send(updatedTodo);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})

//DELETE requests
router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)

        if (!todo) return res.status(404).send("Todo not found....")

        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        res.send(deletedTodo);
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})


module.exports = router;

//user model
//sign up: hash password => public
//signin => JWT => public
//protect api's => middleware => authorization
