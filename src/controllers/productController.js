const Product = require("../model/product")

function postProduct(req, res) {
  const id = req.params.id;
    const product = new Product({
        Title: req.body.title,
        Price: req.body.price,
        LinkProduct: req.body.linkproduct,
        LinkImage: req.body.linkimage,
        VideoID: id,
    })
    try {
        product.save();
        res.status(200).json({ message: 'Product berhasil ditambahkan.', data: product})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function getProductFromVideoId(req, res){
    try {
        const videoId = req.params.id;
        console.log(videoId)
        const product = await Product.find({VideoID:videoId});
        
        if (product === undefined || product.length == 0) {
          return res.status(404).json({ error: 'Product tidak ditemukan.' });
        } else {
          res.json(product);
        }
      } catch (error) {
        res.status(500).json({ error: 'Gagal mendapatkan Product dari Video.' });
      }
}

module.exports = {postProduct, getProductFromVideoId};