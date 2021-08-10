const express = require("express");

const router = express.Router();

// TodosRouter
const { getTodos } = require("../controllers/TodosV2");

router.get("/todos", getTodos);
// EndTodosRouter

module.exports = router;
