const express = require("express");
const { createUser, login } = require("../controller/userCtrl");
const router = express.Router();
const passport = require("passport")

router.post("/register", createUser)
    .post("/login", passport.authenticate("local"), login)


module.exports = router;
