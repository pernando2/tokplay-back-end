const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    VideoID: {type: Number, ref: 'Videos', default:0},
    Username: {
        required: true,
        type: String,
    },
    Comment: {
        required: true,
        type: String,
    },
    timestamps: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Comment", commentSchema);