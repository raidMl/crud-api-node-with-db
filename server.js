const express = require("express")
const mongoose = require("mongoose")
const Product = require('./models/productModel')
require("dotenv").config()

const app = express()
const url = process.env.DB_URL

app.use(express.json())
//app.use(express.urlencoded({extended:false})) //if we use forme data

//routes
app.get('/', (req, res) => {
    res.send("node app start")

})
app.get("/blog", (req, res) => {
    res.send("you are in blog")
})

//create
app.post("/product", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})
//read
app.get('/product', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})
//read by id
app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

//update

app.patch("/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product)
            return res.status(404).json({ message: `can not find any product with id ${id}` })

        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.delete("/product/:id", async (req, res) => {

    try {
        const { id } = req.params
        const removedProduct = await Product.findByIdAndDelete(id)
        if(!removedProduct){
            return res.status(404).json({ message: `can not find any product with id ${id}` })
        }
        const products=await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error })

    }
})


app.listen(5000, () => {
    console.log("node api is runing")
})

const con = mongoose.connect(url)
con.then(() => { console.log("connected to mongo db") })
con.catch((error) => { console.error })
