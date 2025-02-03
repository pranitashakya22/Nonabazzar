const { Category } = require('../models/category');
const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const pLimit = require('p-limit');


router.get(`/`, async (req, res) => {
    const productList = await Product.find().populate("category");

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
});

router.post('/create', async (req, res)=>{
    try {

    const category = await Category.findById(req.body.category);
    if(!category){
        return res.status(404).send("invalid Category!");
    }
     const limit = pLimit(2);
    
        const imagesToUpload = req.body.images.map((image) => { 
                return limit(async () => {
                    return await cloudinary.uploader.upload(image);
                });
        });
    
        const uploadStatus = await Promise.all(imagesToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);
    
            if (!uploadStatus || imgurl.length === 0) {
                return res.status(500).json({
                    error: "Images cannot be uploaded!",
                    status: false
                });
            }
    let product = new Product({
        name:req.body.name,
        description:req.body.description,
        images:imgurl,
        brand:req.body.brandd,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured,
    });

    product = await product.save();
    if(!product){
        res.status(500).json({
            error: err,
            success: false
        })
    }
    res.status(201).json(product)
} catch (error) {
    console.error("Error in POST /create:", error);
    res.status(500).json({
        error: "Internal server error",
        details: error.message
    });
}
    });


router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({ message: 'The product with the given ID was not found.' })
    }
    return res.status(200).send(product);
});


router.delete('/:id', async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    
        if (!deleteProduct) {
           return res.status(404).json({ message: 'Product not found!', status: false })
        }
        res.status(200).send({
            status: true,
            message: 'Product Deleted'
    })
})


router.put('/:id', async(req,res)=>{

    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image)=>{
        return limit(async ()=>{
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });
    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map((item) => {
    return item.secure_url
  })

   if(!uploadStatus){
    return res.status(500).json({
        error:"images cannot be uploaded!",
        status:false
    })
   }
  

    const product = await Product.findByIdAndUpdate(
        req.params.id,
       { 
        name:req.body.name,
        description:req.body.description,
        images:imgurl,
        brand:req.body.brandd,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured,},
        {new:true}
    );
    if(!product){
         res.status(404).json({
            message:'Product cannot be updated!',
            success:false
        })
    }
    res.status(200).json({
        message:'the product is updated',
        status:true
    });
})

module.exports = router;