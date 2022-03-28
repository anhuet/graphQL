const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const mogoose = require('mongoose')

const typeDefs = require('./schema')
const resolvers = require('./resolver/resolver')
const { default: mongoose } = require('mongoose')
const mongoDataMethods = require('./data/db')

// Connect to MongoDb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
    })
    console.log('MongoDb connected')

  } catch (error) {
    console.log('error: ', error.message)
  }
}
connectDB()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods })
})

const app = express()
// server.applyMiddleware({app})



server.start().then(res => {
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port: 4000 }, () =>
    console.log(server.graphqlPath)
  );
});