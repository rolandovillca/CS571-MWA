const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students.controller");

router.route((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.route("/students/all").get(studentController.getAll);
router.route("/students/:studentId").get(studentController.getOne);
router.route("/students/add").post(studentController.addOne);
router.route("/students/delete/:studentId").post(studentController.deleteOne);

module.exports = router;