const mongoose = require("mongoose");

const jobSearchSchema = mongoose.Schema({
    title: { type: String },
    salary: { type: Number },
    location: { type: {}},
    description: { type: String },
    experience: { type: String },
    skills: [String],
    postDate: { type: String }
});

mongoose.model("Job", jobSearchSchema, "jobs");