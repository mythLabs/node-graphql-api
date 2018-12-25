const  { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')


/* The resolvers object is the actual implementation of the GraphQL schema. 
Notice how its structure is identical to the structure of the type definition inside typeDefs: 
Query.info */

const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
})


server.start(() => console.log('server starting at port 4000'))
