import { gql } from "@apollo/client";

const GET_ALL_BOOKS = gql`
  query getAllBooks {
    books {
      name
      genre
      author {
        name
        age
      }
    }
  }
`;
const GET_ALL_AUTHORS = gql`
  query getAllAuthors {
    authors {
      id
      name
      age
      books {
        name
        genre
      }
    }
  }
`;
export { GET_ALL_AUTHORS, GET_ALL_BOOKS };
