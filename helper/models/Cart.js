import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },

  cartItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price:{
        type: Number,
        required: true,
      }
    },
  ],
});
const Cart = mongoose.models.cart || mongoose.model("cart", CartSchema);
export default Cart;
