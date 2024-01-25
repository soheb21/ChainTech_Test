exports.getAllTaskbyUser = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: "Task created by username" })

    } catch (e) {
        console.log("getAllTaskbyUser error", e)
        res.status(401).json({ success: false, message: "Failed to fetch task" });
    }
}