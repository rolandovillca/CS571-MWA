const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        min: 1,
        max: 5
    }
});

mongoose.model("Student", studentSchema, "students");
