const express = require("express");

const router = express.Router();

// TodosRouter
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
} = require("../controllers/Todos");

router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todos", addTodo);
router.patch("/updatetodo/:id", updateTodoPatch);
router.put("/updatetodo-put/:id", updateTodoPut);
router.delete("/deletetodo/:id", deleteTodo);
// EndTodosRouter

module.exports = router;
