const express = require("express");
const app = express();
const mongoose = require("mongoose");
const product = require("./products/product.model.js"); // use{} if you have exported like {products, name}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>This is the front page</h1>");
});

app.post("/api/products", async (req, res) => {
  try {
    const addproduct = await product.create(req.body);
    res.status(200).json(addproduct);
  } catch (error) {
    res.status(500).send("Error adding data to database");
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).send(products);
  } catch {
    res.status(400).send("Product not found");
  }
});

app.get("/api/products/:id", async (req, res) =>{
    try{
        const {id} = req.params
        const products = await product.findById(id)
        res.status(200).json(products)

    }
    catch(error){
        res.status(400).json({succesfull: false, message: error.message})
    }
})
app.put("/api/products/:id", async (req, res) =>{
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
})
app.delete("/api/products/:id",async (req, res)=>{
    try {
      const {id} = req.params
      products = await product.findByIdAndDelete(id)
      if(!products){
        res.status(404).json({message:"Id not found"})
      }  
      res.status(200).json({message: "Id deleted succesfully"})
    } catch (error) {
        res.status(400).json({message: error.message, succesfull: false})
        
    }
})
mongoose
  .connect(
    "mongodb+srv://admin:T1iKjY3tdhIjOKjS@backenddb.zqpyn1j.mongodb.net/Node-API?appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("App is listening in port number 5000..");
    });
  })
  .catch(() => {
    console.log("Connection to database failed");
  });
