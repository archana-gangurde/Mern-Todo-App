const TodoModel = require('../models/TodoModle');

module.exports = async (req, res) => {
  const { id } = req.params;

  const todo = await TodoModel.findById(id);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  await TodoModel.deleteOne({ _id: id });

  res.status(204).json(todo);
}