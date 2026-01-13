const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const product = require("./products/product.model.js"); // use{} if you have exported like {products, name}
const router = require("./routes/product_routes.js")
app.use(express.json());
app.use(express.urlencoded({extended: false}))// to read form data easy to read from forms 

app.use("/api/products",router )

app.get("/", (req, res) => {
  res.send("<h1>This is the front page</h1>");
});


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
