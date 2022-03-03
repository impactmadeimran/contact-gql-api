const { gql } = require('apollo-server')


exports.typeDefs = gql`
type Query {
    getMessages:[Message!]!
}

type Message{
    id:ID!
    fullName:String!,
    institution:String!,
    email:String!,
    phone:String!,
}
type Mutation{
 AddMessage(input:MessageInput!):Message
}

input MessageInput{
    fullName:String!,
    institution:String!,
    email:String!,
    phone:String!,
}

`