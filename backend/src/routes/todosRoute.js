const TodoModel = require('../models/TodoModle');

module.exports = async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
}