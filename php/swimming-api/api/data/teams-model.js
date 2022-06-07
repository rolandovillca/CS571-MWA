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
    creation_year: {
        type: Number
    },
    creation_month: {
        type: Number
    },
    creation_day: {
        type: Number
    },
    members: {
        type: {}
    }
});

mongoose.model(process.env.TEAM_MODEL, teamSchema, "teams");