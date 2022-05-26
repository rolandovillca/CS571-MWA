const studentsJson = require("../data/school.json");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("Middleware - Students Route: " + req.method + " " + req.url);
    next();
});

router.get("/students", (req, res) => {
    res.status(200);
    res.json(studentsJson);
});

router.get("/students/:studentId", (req, res) => {
    const studentId = parseInt(req.params.studentId);
    let result = {};
    if (studentId >= 0 && studentId < studentsJson.length) {
        result = studentsJson[studentId];
    }
    res.status(200);
    res.json(result);
});

module.exports = router;