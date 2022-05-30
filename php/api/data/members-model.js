const mongoose = require("mongoose");
const membersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    numberOlympicParticipation: {
        type: Number
    }
});

mongoose.model("Member", membersSchema, "members");