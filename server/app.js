const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const typeDefs = require('./schema')
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express()
// server.applyMiddleware({app})



server.start().then(res => {
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port: 4000 }, () =>
  console.log(server.graphqlPath)
  );
});