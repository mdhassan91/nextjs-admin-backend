import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
 
});
const User = mongoose.models.user || mongoose.model("user", UserSchema);
export default User;
