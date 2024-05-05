const zod = require("zod");

const createTodo = zod.object({
  name: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id:zod.string(), 
});


module.exports = {
    createTodo,
    updateTodo,
    };