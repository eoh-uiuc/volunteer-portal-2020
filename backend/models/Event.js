const mongoose = require("mongoose");

const Event = new mongoose.Schema({
    name: { type: String },
    date: { type: String },
    description: { type: String },
    volunteers: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
    },
    maxVolunteers: { type: Number }
});

module.exports = mongoose.model("Event", Event);