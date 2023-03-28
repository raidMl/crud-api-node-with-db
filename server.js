const express = require("express")
const mongoose = require("mongoose")
const Product = require('./models/productModel')
const prodsroute = require("./routes/prods")
require("dotenv").config()

const app = express()
const url = process.env.DB_URL

app.use(express.json())
//app.use(express.urlencoded({extended:false})) //if we use forme data

//routes
app.get('/', (req, res) => {
    res.send("node app start")

})
app.use("/", prodsroute)


app.listen(5000, () => {
    console.log("node api is runing")
})

const con = mongoose.connect(url)
con.then(() => { console.log("connected to mongo db") })
con.catch((error) => { console.error })
