const mongoose = require("mongoose");
const Student = mongoose.model(process.env.STUDENT_MODEL);

const getAll = (req, res) => {
    console.log("...............................");
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    Student.find().exec((err, students) => {
        console.log("Found students", students.length);
        res.json(students);
    });
}

const getOne = (req, res) => {
    const studentId = req.params.studentId;
    Student.findById(studentId).exec((err, student) => {
        res.status(200).json(student);
    });
}

module.exports = {
    getAll,
    getOne
}