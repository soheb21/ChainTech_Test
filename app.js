require("dotenv").config();
const express = require("express");
const session = require("express-session")
const passport = require("passport");
const { connectDB } = require("./db/database");
const { isAuth } = require("./middleware/common");
const { LocalStategy } = require("./middleware/passport_stretagy");
const app = express();


//middleware
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.authenticate("session"))

//passport
passport.use("local", LocalStategy)
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    })
});
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    })
});

//routes with middleware
app.use("/api/v1/task", isAuth, require("./routes/task"))
app.use("/api/v1/auth", require("./routes/user"))

//Database
connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running at port no ${port}`))