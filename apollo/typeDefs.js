import { gql } from "apollo-server-micro";

//Product Queries
const typeDefs = gql`
  type CartItems {
    productId: ID!
    title: String!
    price: Int!
  }
type Cart{
  username: String!
  userId: String!
  cartItems:[ CartItems]
}

  type User {
    id: ID!
    name: String!
 
  }
  type Product {
    id: ID!
    title: String!
    price: Int!
  }
  type Query {
    getAllProducts: [Product]
    getProductById: Product
    getUsers: [User]
    hello: String!
  }
  input ProductInput {
    title: String!
    price: Int!
  }
  input UserInput {
    name: String!

  }

  input CartInput {
   
    userId:ID!
   
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    createUser(user: UserInput): User
    createCart(id:String,cart: CartInput): Cart
  }
`;
export default typeDefs;
