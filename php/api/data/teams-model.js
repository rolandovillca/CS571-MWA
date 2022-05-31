const mongoose = require("mongoose");
// import mongoose from "mongoose";
// const { Schema } = mongoose;

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date
    }
});

mongoose.model("Team", teamSchema, "teams");