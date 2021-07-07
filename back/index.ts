  
import express from "express"
const app=express()
import {ApolloServer,PubSub,AuthenticationError} from 'apollo-server-express'
import dotenv from 'dotenv'
//using graphql --->we dont need body parser
dotenv.config({path:'./dot.env'})
// import {schema} from './Graphql/graphql'
// import {resolvers} from './graphql/resolvers' 
import {resolvers} from './graphql/resolvers' 
// import { typeDefs } from './graphql/typedefs';
import { typeDefs } from './graphql/typedefs';
// import mongoose from 'mongoose'
import mongoose from 'mongoose'
import http from 'http'
import  jwt from 'jsonwebtoken'
import { User } from './Model/User'

import cors from 'cors'
// const cookieParser =require('cookie-parser')
import cookieParser from 'cookie-parser'
import {OAuth2Client} from 'google-auth-library'

//passing client id
 const OAuthClient =new OAuth2Client("851838321229-opcjt204f9io03e7dj0ji9md4eu025ca.apps.googleusercontent.com")

const pubsub = new PubSub()
 


// app.use(cors({
//     credentials:true,
//     origin: 'http://localhost:3000'
// }))

app.use(cookieParser())


const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({{ req, res }: any}) => ({ req,res,pubsub }),
    context: async ({ req, res, connection,client }: any) => {
        
        req.headers.jacob && console.log('req.jacob',req.headers.jacob)
           
            
        return { req, res, pubsub, connection,OAuthClient }
    },
    subscriptions: {
        onConnect: async (connectionParams, webSocket) => {
          console.log('xxx');
          console.log(connectionParams);
        },
    },
    // schemaDirectives:{@skip}
});
const httpServer = http.createServer(app);
server.applyMiddleware({ app, path: '/graphql',cors: {
    credentials:true,
    origin: 'http://localhost:3000'
} })

server.installSubscriptionHandlers(httpServer);
 

// server.installSubscriptionHandlers();

console.log('hey') 

// 'mongodb://localhost/new'
mongoose.connect('mongodb://localhost:27017/apolloClient',{
    // newURLParser:true
    useNewUrlParser: true,
    useUnifiedTopology: true
     
}).then(() => { 
    console.log('connected to mongodb')
    httpServer.listen(process.env.PORT,()=>{
        console.log('app is listening on port 4000/graphql')
        console.log(
            `🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`,
          );
    }) 
}).catch(console.log)

process.on('unhandledRejection', (err:Error) => {
    
    console.log(err?.name,err?.message);
    process.exit(1);
});
