const express = require('express');
const router = express.Router();
const videoController = require("../controllers/videoController")
const productController = require("../controllers/productController")
const commentController = require("../controllers/commentController")

// Video
router.get('/getAllVideo', videoController.getAllVideo)
router.post('/postVideo', videoController.postVideo)

// Product
router.get('/getProduct/:id', productController.getProductFromVideoId)
router.post('/postProduct/:id', productController.postProduct)

// Comment
router.get('/getComment/:id', commentController.getCommentFromVideoId)
router.post('/postComment/:id', commentController.postComment)
module.exports = router;