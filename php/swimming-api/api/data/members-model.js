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
    number_olympic_participation: {
        type: Number
    }
});

mongoose.model("Member", membersSchema, "members");