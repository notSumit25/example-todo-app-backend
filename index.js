const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
app.use(express.json());


app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    return res.status(400).send(parsedPayload.error.errors);
  }

});


app.get('/todos', (req, res) => {
  res.send('Get all todos');
});


app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      return res.status(400).send(parsedPayload.error.errors);
    }
    });

