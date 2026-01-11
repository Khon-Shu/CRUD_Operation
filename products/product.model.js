const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter your name"]
        },
        quantity: {
            type: Number,
            required:[true, "Please enter quantity"],
            default: 0
        },
        price:{
            type: Number,
            required: [true, "Please enter the price of product"]
        },
        image:{
                type: String,
                required:[false]
        }, 
       
    },
    {timestamps: true}
) 

const product = mongoose.model("Product", ProductSchema)

module.exports = product