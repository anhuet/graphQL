import { gql } from "@apollo/client";

const ADD_BOOK = gql`
  mutation createBook($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

const ADD_AUTHOR = gql`
  mutation createAuthor($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`;

export { ADD_AUTHOR, ADD_BOOK };
