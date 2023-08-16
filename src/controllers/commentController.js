const Comment = require("../model/comment")

function postComment(req, res) {
  const id = req.params.id;
  
  const comment = new Comment({
      Username: req.body.username,
      Comment: req.body.comment,
      VideoID: id,
  })
  try {
      comment.save();
      res.status(200).json("Success")
  }
  catch (error) {
      res.status(400).json("Fail")
  }
}

async function getCommentFromVideoId(req, res){
    try {
        const videoId = req.params.id;
        const comment = await Comment.find({VideoID:videoId});
        
        if (comment === undefined || comment.length == 0) {
          return res.status(404).json({ error: 'Comment tidak ditemukan.' });
        } else {
          res.json(comment);
        }
      } catch (error) {
        res.status(500).json({ error: 'Gagal mendapatkan Comment dari Video.' });
      }
}

module.exports = {getCommentFromVideoId, postComment};