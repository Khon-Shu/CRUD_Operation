const product = require('../products/product.model.js')

const getProduct = async(req, res)=>{
     try {
    const products = await product.find({});
    res.status(200).send(products);
  } catch {
    res.status(400).send("Product not found");
  }
}

const updateProduct =async (req, res) =>{
    try {
        const {id} = req.params
        const products = await product.findByIdAndUpdate( id, req.body)
        if(!products){
            res.status(400).json({message: "No Product found with this id ", succesfull : false})
        }
        const updatedProducts = await product.findById(id)
        res.status(200).json(updatedProducts)
    } catch (error) {
        res.send(400).json({message: error.message, succesfull: false})
    }
}

const getProductByID = async(req, res)=>{
    try {
        const {id} = req.params
        const foundProduct = await product.findById(id)
        res.status(200).json(foundProduct)
    } catch (error) {
        res.status(404).json({message:"Product not found"})
    }
}
const deleteProduct =async (req, res)=>{
    try {
      const {id} = req.params
      products = await product.findByIdAndDelete(id)
      if(!products){
       return res.status(404).json({message:"Id not found", succesfull: "false"})
      }  
      return res.status(200).json({message: "Id deleted succesfully"})
    } catch (error) {
       return res.status(400).json({message: error.message, succesfull: false})
        
    }
}
const addProduct = async (req, res) => {
  try {
    const addproduct = await product.create(req.body);
    res.status(200).json(addproduct);
  } catch (error) {
    res.status(500).send("Error adding data to database");
  }
}

module.exports ={getProduct, getProductByID, deleteProduct, updateProduct, addProduct}