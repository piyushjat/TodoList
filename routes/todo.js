const express=require('express');
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require('../controllers/deleteTodo');
const { getTodo, getTodobyId } = require("../controllers/getTodo");
const { updateTodo } = require('../controllers/updateTodo');

router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodobyId);
router.put("/updateTodo/:id",updateTodo);

module.exports = router;
