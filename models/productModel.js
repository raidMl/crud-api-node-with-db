const { default: mongoose } = require("mongoose");


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter a product name"]
    },
    quantity:{
         type:Number,
         required:true,
         default:0
    },

    price:{
        type:Number,
        required:true,
    },

    image:{
        type:String,
        required:false
    }
},


{timestamps:true}//when data c&u
)

const Product=mongoose.model('Product',productSchema) //create a model

module.exports=Product