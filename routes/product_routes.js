const express = require('express')
const router = express.Router()
const product = require('../products/product.model.js')
const {getProduct, getProductByID, deleteProduct, updateProduct, addProduct} = require('../controller/product_controller.js');
const { get } = require('mongoose');

router.post("/",addProduct );

router.get("/", getProduct);

router.get("/:id",getProductByID )
router.put("/:id",updateProduct )
router.delete("/:id",deleteProduct)


module.exports= router
