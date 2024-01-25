const express = require("express");
const { getAllTaskbyUser } = require("../controller/taskCtrl");
const router = express.Router();

router.get("/", getAllTaskbyUser);

module.exports = router;
