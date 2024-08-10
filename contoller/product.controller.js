const Product =require('../models/product.model')


const getProducts = async(req,res)=>{
    try {
        const products =await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getSingleProduct = async(req,res)=>{
        try {
            const {id} =req.params;
            const product =await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
}
const createProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateProduct =async(req,res)=>{
    try {
        const {id} = req.params;
        const product =await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:"Product Not Found"})
        }
        const updatedProduct =await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteProduct =async(req,res)=>{
    try {
        const {id} =req.params
        const product =await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"Product deleted succesfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}



module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}