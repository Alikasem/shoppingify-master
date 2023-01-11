`use strict`
const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {ApolloServer} = require("apollo-server");
const typeDefs = require('./schema/index.js');
const resolvers = require('./resolvers/index.js')

const app = express();

// const excuteSchema = makeExecutableSchema({
//     typeDefs: productGql,
//     resolvers: productResolver
// });
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
// app.use('/graphql', graphqlHTTP({
//     schema: excuteSchema,
//     context: '',
//     graphiql: true,
// }),
// );
server.applyMiddleware({app});
mongoose.connect('mongodb://localhost:27017/shoopingify',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('database is connected'));

app.listen(3000, ()=> {
    console.log('Server started on port: 3000!!');
})
