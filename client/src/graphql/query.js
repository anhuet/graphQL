import { gql } from "@apollo/client"

const GET_ALL_BOOKS = gql`
  query getAllBooks {
    getAllBooks {
      name
      genre
      author {
        name
        age
      }
    }
  }
`
const GET_ALL_AUTHORS = gql`
  query getAllAuthors {
    getAllAuthors {
        name
        age 
        book {
            name
            genre
        }
      }
    }
  }
`