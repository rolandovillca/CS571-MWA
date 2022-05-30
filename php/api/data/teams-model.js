const mongoose = require("mongoose");
const teamsSchema = mongoose.Schema({
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

mongoose.model("Team", teamsSchema, "teams");