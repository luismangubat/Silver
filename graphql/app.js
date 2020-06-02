const Koa = require('koa')
const {AppoloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers, typeDefs} = require('./schemas')
const PORT = 4000

const server = new AppoloServer({
    schema: makeExecutableSchema({typeDefs, resolvers})
})

const app = new Koa()
server.applyMiddleware({app})

app.listen({port: PORT}, () => {
    console.log(`Server ready at htttp://localhost${PORT + server.graphqlPath}`)
})
