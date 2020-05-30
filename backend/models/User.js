const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    role: {
        type: String,
        default: "volunteer",
        enum: ["admin", "volunteer"]
    },
    email: { type: String },
    phone: { type: String },
    netid: { type: String },
    password: { type: String },
    society: { type: String }
});

module.exports = mongoose.model("User", User);