const express=require('express');
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require('../controllers/deleteTodo');
const { getTodo, getTodobyId } = require("../controllers/getTodo");

router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodobyId);

module.exports = router;
