const express = require('express');
const { createTodo, updateTodo } = require('./types');
const cors = require('cors');
const { todo } = require('./db');
const app = express();
app.use(express.json());
app.use(cors());


app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  console.log(createPayload);
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    return res.status(400).send(parsedPayload.error.errors);
  }
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    
  });
    res.json({
        msg: 'Todo created'
    });

});


app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.send(todos);
});


app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      return res.status(400).send(parsedPayload.error.errors);
    }

    todo.updateOne({ _id: req.body.id }, { completed: true }, (err) => {
        if(err) {
            return res.status(500).send('Something went wrong');
        }
        res.json({
            msg: 'Todo updated'
        });
    });
    });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
