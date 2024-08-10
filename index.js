const express = require('express')
const mongoose = require('mongoose');
const Product =require('./models/product.model.js')
const productRoutes =require('./routes/product.route.js')
const app = express()
app.use(express.json())

app.use("/api/products",productRoutes)

app.get('/',(req,res)=>{
    res.send('hello from node api adp');
})


mongoose.connect('mongodb+srv://aaronpintodane:BHWeYokNUpXDLkiA@backenddb.hm86d.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
    console.log('CONNECTED TO DATABASE');
    app.listen(3000,()=>{
        console.log('server runnng on port 3000');
    });
})
.catch(()=>{
    console.log('Connection failed');
})

