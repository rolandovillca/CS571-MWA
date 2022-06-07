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
    if (isNaN(offset) || isNaN(count)) {
        const msg = "QueryString Offset and Count should be numbers";
        res.status(400).json({"message": msg})
    }
    // Student.find().exec((err, students) => {
    //     console.log("Found students", students.length);
    //     res.json(students);
    // });
    Student.find().skip(offset).limit(count).exec((err, students)=>{
        console.log("Found students", students.length);
        res.json(students);
    });
}

const getOne = (req, res) => {
    const studentId = req.params.studentId;
    if (studentId) {
        Student.findById(studentId).exec((err, student) => {
            const response = {
                status: 200,
                message: student
            }
            if (err) {
                console.log("Error finding student");
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
}

const addOne = (req, res) => {
    console.log("Student AddOne request");
    const newStudent = {
        name: req.body.name,
        gpa: req.body.gpa
    };
    Student.create(newStudent, (err, student) => {
        const response = {status: 200, message: student};
        if (err) {
            console.log("Error creating student: " + err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const deleteOne = (req, res) => {
    const studentId = req.params
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne
}