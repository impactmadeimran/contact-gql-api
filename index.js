const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Schema');
const { Query } = require('./Resolvers/Query');
const mongoose = require('mongoose');
const Contact = require('./models/Contact')
const { Mutation } = require('./Resolvers/Mutation');


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Mutation,
        Query
    }, context: {
        Contact
    }

})

mongoose.connect('mongodb+srv://imran:test123@cluster0.hprkd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    server.listen().then(({ url }) => {
        console.log('Now listening on', url);
    }).catch(err => {
        console.log(err);
    });
})
