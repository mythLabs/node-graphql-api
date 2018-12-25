const  { GraphQLServer } = require('graphql-yoga');


/* The resolvers object is the actual implementation of the GraphQL schema. 
Notice how its structure is identical to the structure of the type definition inside typeDefs: 
Query.info */
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
  let idCount = links.length

const resolvers = {
    Query: {
       info: () => 'Very important data',
       feed: () => links
    },
    Mutation: {
        post: (parent, args) => {
           const link = {
            id: `link-${idCount++}`,
            description: args.description,
            url: args.url,
          }
          links.push(link)
          return link
        }
      }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})


server.start(() => console.log('server starting at port 4000'))
