const TodoModel = require('../models/TodoModle');

module.exports = async (req, res) => {
  const {text} = req.body;
  const todo = new TodoModel({
    text,
    completed: false,
  })
  const newTodo = await todo.save();
  res.json(newTodo);
};