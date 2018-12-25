const  { GraphQLServer } = require('graphql-yoga');

/* The typeDefs constant defines your GraphQL schema (more about this in a bit). 
Here, it defines a simple Query type with one field called info. This field has the type String!. 
The exclamation mark in the type definition means that this field can never be null*/
const typeDefs = `
{
    type Query {
        info: String!
    }
}`

/* The resolvers object is the actual implementation of the GraphQL schema. 
Notice how its structure is identical to the structure of the type definition inside typeDefs: 
Query.info */
const resolvers = {
    Query: {
       info: () => `This is the  API of some important data`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})


server.start(() => console.log('server starting at port 4000'))
