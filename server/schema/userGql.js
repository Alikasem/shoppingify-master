import {gql} from "apollo-server-express";

const UserGql = gql`
    type ProductList {
        products: Product
        total: Int
    }
    type User {
        id: ID
        name: String
        productList: [ProductList]
    }
    input ProductListInput {
        products: ID
        total: Int
    }
    input CreateUser {
        name: String
        productList: [ProductListInput]
    }
    type Query {
        getUsersHistory: [User]
    }
    type Mutation {
        createUser(user: CreateUser): Message
    }
`
export default UserGql;
