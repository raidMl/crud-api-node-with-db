const express=require("express")
const router=express.Router() // in the place of app
const { readProd, createProd, searchProd, deleteProd, updateProd } = require("../controllers/prodController");




//create
router.post("/product",createProd)

//read
router.get('/product',readProd )
//read by id
router.get('/product/:id', searchProd)

//update

router.patch("/product/:id",updateProd)

router.delete("/product/:id", deleteProd)

module.exports=router