const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const isUserThere = await UserModel.findOne({ email });
        if (isUserThere) return res.status(199).json({ success: false, message: "user Already Register" })
        const user = new UserModel({ email, password: passwordHash });
        await user.save();
        res.status(201).json({ success: true, message: "User Register Successfully", })

    } catch (error) {
        console.log("register error", error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
exports.login = async (req, res) => {
    try {
        res.status(201).json({ success: true, data: req.user })

    } catch (error) {
        console.log("Login error", error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
