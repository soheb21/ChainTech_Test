const UserModel = require("../model/userModel");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt")

//Local Strategy
const LocalStategy = new localStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            done(null, false, { error: 'no such user email' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            done(null, { error: "Password is wrong" });
        } else {
            done(null, { id: user._id, email: user.email });
        }
    } catch (error) {
        done(error, false, { error: "there is an error in local startegy" })
    }
})
module.exports = { LocalStategy }
