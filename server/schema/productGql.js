// const {gql} = require("apollo-server-express");
import {gql} from "apollo-server";
import exp from "constants";
const productGql = gql`
    type Product {
        id: ID!
        name: String
        note: String
        image: String
        category: String
        created_at: String
        last_update: String
        _deleted: Boolean
    }
    type Message {
        text: String
        code: Int
    }
    input CreateProduct {
        name: String
        note: String
        image: String
        category: String
    }
    input UpdateProduct {
        name: String
        note: String
        image: String
        category: String
    }
     extend type Query{ 
        getProduct(id: ID): Product
        products: [Product]
    }
      extend type Mutation {
        createProduct(product: CreateProduct): Message
        updateProduct(id: ID, product: UpdateProduct): Message
        deleteProduct(id: ID): Message
    }
`
export default productGql;
