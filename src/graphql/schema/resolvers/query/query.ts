import { GraphQLObjectType } from "graphql";
import getAllBooksQuery from "./getllBooksQuery";




const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    books: getAllBooksQuery,
  }
});

export default query;