const express = require('express');
const mongoose = require('mongoose');
const  router = require("./routes/book-routes");
const cors = require("cors");
const app  = express();

app.use(express.json()); // 
app.use(cors());
// middlewares

// app.use('/', (req, res, next)=>{
// res.send("This is our starting app");
// })

app.use("/books",router) // localhost 5000 / books

mongoose.connect("mongodb+srv://admin:l4j0aPHDY3ij3nTc@cluster0.4eeb6.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=> console.log("connected to database")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));

// l4j0aPHDY3ij3nTc