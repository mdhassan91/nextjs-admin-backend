import mongoose from "mongoose";

const ProductSchema =new mongoose.Schema({
    title:String,
     price:Number,
});
const Product = mongoose.models.product || mongoose.model("product",ProductSchema)
export default Product;