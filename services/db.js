// Import mongoose

const mongoose= require('mongoose')

// Define connection string

mongoose.connect('mongodb://0.0.0.0:27017/cart',()=>{
    console.log('Connected to MongoDB');
})

// model creation

const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String
})

// export

module.exports={
    Product,
    Wishlist
}