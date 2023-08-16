const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    thumbnailUrl: {
        required: true,
        type: String
    },
    _id: { type: Number },
})


// Pre-save hook untuk meng-generate _id auto increment
videoSchema.pre('save', async function (next) {
    if (!this._id) {
        const count = await this.constructor.countDocuments({});
        this._id = count + 1;
    }
    next();
});
module.exports = mongoose.model('Video', videoSchema)