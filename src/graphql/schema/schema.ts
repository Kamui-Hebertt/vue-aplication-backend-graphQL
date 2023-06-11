import query from './resolvers/query/query';
import { GraphQLSchema } from "graphql";





const schema: GraphQLSchema = new GraphQLSchema({
  query: query
  // mutation: mutation
});

export default schema;