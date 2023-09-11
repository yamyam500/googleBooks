const { gql } = require("apollo-server-express");
const { Model } = require("mongoose");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  input BookInput{
    bookId: ID!
    authors:[String]
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
    addUser(username: String!, email: String!, password: String! ) : Auth
    saveBook(bookData: BookInput! ): User
    removeBook(bookId: ID!):User
  }
`;


module.exports = typeDefs