const TaskModel = require("../model/taskModel");

exports.getAllTaskbyUser = async (req, res) => {
    try {
        const { id } = req.user;
        console.log({ id })
        const doc = await TaskModel.find({ userID: id }).sort({ created_at: 'descending' });
        res.status(201).json({ success: true, message: "Task created by username", data: doc })

    } catch (error) {
        console.log("getAllTaskbyUser error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })

    }
}
exports.craeteTask = async (req, res) => {
    try {

        const { title, description, status } = req.body;
        const { id } = req.user;
        if (status === "completed") {
            return res.status(400).json({ error: 'This Task is Already completed' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Both title and description are required' });
        }

        const doc = new TaskModel({ title, description, userID: id })
        await doc.save();
        res.status(201).json({ success: true, message: "Task is created " })


    } catch (error) {
        console.log("create task error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await TaskModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ success: true, message: "Task is Updated Successfully", data: doc })

    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' })
        console.log("update task error", error)
    }
}
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await TaskModel.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Task is deletd Successfully", deleteID: id })
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' })
        console.log("delete task error", error)
    }
}
