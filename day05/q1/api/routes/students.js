const express = require("express");
const { model } = require("mongoose");
const router = express.Router;

router.route((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.route("/students/all", studentController.getAll);
router.route("/students/:studentId", studentController.getOne);

module.exports = router;