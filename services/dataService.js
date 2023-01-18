const db = require('./db')

// get all the products from db

const getProducts = ()=>{
  return  db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }    
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No product found'    
                }
            }
        }
    )
}

const addtowishlist = (id, title, price, image, description) =>{
    // data added to mongodb
    // create a model in db.js

    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'Product already exists'
                }
            }
            else{
                const newProduct = new db.Wishlist({id, title, price, image, description})
                newProduct.save()   // save data into mongodb
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added to Wishlist'
                }
            }
        }
    )
}

// to get wishlist
const getWishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:true,
                    statusCode:200,
                    message:'Your Wishlist is empty'
                }
            }
        }
    )
}

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                // return{
                //     status:true,
                //     statusCode:200,
                //     wishlist:result,
                //     message:"Product removed from Wishlist"
                // }
                return db.Wishlist.find().then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                wishlist:result,
                                message:'Product removed successfully'
                            }
                        }
                        else{
                            return{
                                status:false,
                                statusCode:404,
                                message:'Product not found'
                            }
                        }
                    }
                )
            
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Wishlist is empty'
                }
            }
        }

    )
}

module.exports={
    getProducts,
    addtowishlist,
    getWishlist,
    deletewish
}