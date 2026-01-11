const express = require('express')
const app = express()
const mongoose = require('mongoose')
const product = require('./products/product.model.js') // use{} if you have exported like {products, name}


app.use(express.json())


app.get('/', (req, res)=>{
    res.send("<h1>This is the front page</h1>")
})

app.post('/api/products', async(req, res) =>{
    try {
        const addproduct = await product.create(req.body)
        res.status(200).json(addproduct)
        
    } catch (error) {
        res.status(500).send("Error adding data to database")
    }
})

mongoose.connect("mongodb+srv://admin:T1iKjY3tdhIjOKjS@backenddb.zqpyn1j.mongodb.net/Node-API?appName=BackendDB")
.then(() =>{
    console.log("Connected to database")
    app.listen(5000, ()=>{
        console.log("App is listening in port number 5000..")
    })
}).catch(()=>{
    console.log("Connection to database failed")
})