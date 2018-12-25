const  { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')


/* The resolvers object is the actual implementation of the GraphQL schema. 
Notice how its structure is identical to the structure of the type definition inside typeDefs: 
Query.info */

  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: (root, args, context, info) => {
        return context.prisma.links()
      },
    },
    Mutation: {
      post: (root, args, context) => {
        return context.prisma.createLink({
          url: args.url,
          description: args.description,
        })
      },
    },
  }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
})


server.start(() => console.log('server starting at port 4000'))
