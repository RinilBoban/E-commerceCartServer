const express=require('express')

const cors = require('cors')

const dataService = require('./services/dataService')

const app = express()

// to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

// Connect back end and MongoDB
app.use(cors({
    origin:'http://localhost:4200'
}))

// api to get all products

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to add products to  wish list items

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id, req.body.title, req.body.price, req.body.image, req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api to get wish list items
app.get('/getWishlist',(req,res)=>{
    dataService.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to delete wishlist products
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})