const express = require('express');
const app = express();
app.use(express.json());


app.post('/todo', (req, res) => {
  console.log(req.body);
  res.send('Todo is added to the database');
});


app.get('/todos', (req, res) => {
  res.send('Get all todos');
});


app.put('/completed', (req, res) => {
    res.send('Todo is updated');
    });

