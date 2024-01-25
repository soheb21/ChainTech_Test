const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const taskSchema = new mongoose.Schema({
    taskTitle: { type: String, required: true },
    task: { type: String, required: true },
    status: { type: String, default: "pending" }

}, opts)

const TaskModel = new mongoose.model("task", taskSchema)
module.exports = TaskModel;