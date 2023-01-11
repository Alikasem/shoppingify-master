const { gql } = require('apollo-server-express');

const UserGql = gql`
    type ProductList {
        product: ID
        total: Int
    }
    type User: {
        name: String
        productList: [ProductList]
    }
    input ProductListInput {
        product: ID
        total: Int
    }
    input CreateUser {
        name: String
        productList: [ProductListInput]
    }
     extend type Query{
        getUsersHistory: [User]
    }
    extend type Mutation {
        createUser(user: CreateUser): Message
    }
`
module.exports = UserGql;
