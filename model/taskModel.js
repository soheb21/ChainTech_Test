const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: "pending" }

}, opts)

const TaskModel = new mongoose.model("task", taskSchema)
module.exports = TaskModel;