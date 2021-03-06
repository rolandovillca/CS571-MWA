const mongoose = require("mongoose");
// import mongoose from "mongoose";
// const { Schema } = mongoose;

const membersSchema = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    number_olympic_participation: { type: Number }
});

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    creation_year: {
        type: Number
    },
    creation_month: {
        type: Number
    },
    creation_day: {
        type: Number
    },
    members: [membersSchema]
});

mongoose.model(process.env.TEAM_MODEL, teamSchema, "teams");