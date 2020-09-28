const express = require('express');
const app = express()
const mongoose = require('mongoose')

// const MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb+srv://amil:amilasim@cluster0.luzkg.mongodb.net/TodoList?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect(err => {
//     const collection = client.db("TodoList").collection("TodoList");
//     // perform actions on the collection object
//     client.close();
// });
//
// const TodoModel = client.model("todo", {text: String});

mongoose.connect("mongodb+srv://amil:amilasim@cluster0.luzkg.mongodb.net/TodoList?retryWrites=true&w=majority")
const TodoModel = mongoose.model("todo", {text: String});

app.get("/get-all", ((req, res) => {
    TodoModel.find({}, (err, docs) => {
        res.status(200).json({
            docs: docs
        });
    })
}))

app.post("/save", ((req, res) => {
    const newTodoItem = new TodoModel({
        text: req.body.todoText
    })
    newTodoItem.save()
        .then(response => {
            res.status(200).json({
                data: response
            })
        })
}))

app.delete("/delete", ((req, res) => {
    let todo = req.body.todo
    TodoModel.findOneAndRemove({_id: todo._id}, () => {
            res.status(204).json({
                message: "deleted"
            })
        }
    )
}))

app.put("/update", ((req, res) => {
    let updatedTodo = req.body.todo
    TodoModel.findOneAndUpdate({_id: updatedTodo._id}, { text: updatedTodo.text }, () => {
            res.status(200).json({
                message: "updated"
            })
        }
    )
}))

//Routing
module.exports = {
    path: "/api",
    handler: app
}