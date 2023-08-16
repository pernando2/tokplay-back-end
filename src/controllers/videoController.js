const Video = require("../model/video")

function postVideo(req, res) {
    const video = new Video({
        title: req.body.title,
        thumbnailUrl: req.body.thumbnailUrl,
    })
    try {
        video.save();
        res.status(200).json({ message: 'Video berhasil ditambahkan.', data: video})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function getAllVideo (req, res){
    try {
        const movies = await Video.find();
        res.json(movies)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {postVideo,getAllVideo};