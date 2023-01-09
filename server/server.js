`use strict`
var express = require('express');
var mongoose = require('mongoose');
var {graphqlHTTP} = require('express-graphql');
var { makeExecutableSchema } = require('@graphql-tools/schema');
var productGql = require("./schema/productGql.js");
var productResolver = require("./resolvers/productResolver.js");

const app = express();

const excuteSchema = makeExecutableSchema({
    typeDefs: productGql,
    resolvers: productResolver
});
app.use('/graphql', graphqlHTTP({
    schema: excuteSchema,
    context: '',
    graphiql: true,
}),
);
mongoose.connect('mongodb://localhost:27017/shoopingify',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('database is connected'));

app.listen(3000, ()=> {
    console.log('Server started on port: 3000!!');
})
