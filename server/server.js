import express from 'express'
import mongoose from "mongoose";
import {ApolloServer} from "apollo-server-express";
import typeDefs from './schema/index.js';
import resolvers from './resolvers/index.js'

const app = express();

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
await server.start();
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
