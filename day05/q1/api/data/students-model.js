const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
        min: 15,
        max: 90
    }
});

mongoose.model("Student", studentsSchema, "students");