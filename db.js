const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:JsGWUfCztJCoubLs@cluster0.6qhdsop.mongodb.net/todo')


const todoSchema = mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
    });

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
    };

