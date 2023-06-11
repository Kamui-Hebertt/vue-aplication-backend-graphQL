import { ApolloServer } from "@apollo/server";
import { gql } from "apollo-server";
import {Book} from './data/types/Book'
import schema from './graphql/schema/schema';


import { startStandaloneServer } from "@apollo/server/standalone"

const books:Book[] = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },
];


// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     hello: String!
//     books: [Book]
//   }
// `;



// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

const server = new ApolloServer({
schema

})
const startServer = async () => {

  const { url } = await startStandaloneServer(server,{listen: {port: 4000}})
  
  console.log(`🚀 Server ready at ${url}`)
}

startServer();