const express = require("express");
const { getAllTaskbyUser, craeteTask, updateTask, deleteTask } = require("../controller/taskCtrl");
const router = express.Router();

router.post("/", craeteTask)
    .get("/", getAllTaskbyUser)
    .patch("/:id", updateTask)
    .delete("/:id", deleteTask)


module.exports = router;
