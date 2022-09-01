import Product from "../helper/models/Product";
import User from "../helper/models/User";
import Cart from "../helper/models/Cart";

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello, world!";
    },
    getAllProducts: async () => {
      return await Product.find({});
    },
    getUsers: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      const { title, price } = args.product;
      const product = await new Product({
        title: title,
        price: price,
      }).save();
      return product;
    },
    createUser: async (_, args) => {
      const { name } = args.user;
      const user = await new User({ name: name }).save();
      return user;
    },
    createCart: async (_, args) => {
      const { id } = args;
      const { userId } = args.cart;
      console.log(userId);
      const userObj = await User.findById(userId);
      console.log(userObj);

      const productObj = await Product.findById(id);
      console.log(productObj);
      const obj = { productId: productObj._id, ...productObj };
      const cartItems = [];
      cartItems.push(obj);
      const cart = await new Cart({
        username: userObj.name,
        userId: userObj._id,
        cartItems: cartItems,
      });
      return cart;
    },
  },
};

export default resolvers;
