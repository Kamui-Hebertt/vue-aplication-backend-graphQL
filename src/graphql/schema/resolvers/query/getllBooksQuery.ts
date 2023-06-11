import { GraphQLList } from "graphql";
import { Book } from "../../../../data/types/Book";
import GqlBook from "../../typedefs/GtlBooks";




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


const getAllBooksQuery = {
  type: new GraphQLList(GqlBook),
  resolve: (_source: unknown): Book[] => {
    return books;
  }
}

export default getAllBooksQuery;