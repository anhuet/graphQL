import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const graphqlInstance = axios.create({
  baseURL: "http://localhost:4000",
});

graphqlInstance.defaults.headers.common = headers;

const getAllBooks = () => {
  return graphqlInstance.post("/graphql", {
    query: `query getAllBooks {
        books {
          name
          genre
          author {
            name
            age
          }
        }
      }`,
  });
};
export { getAllBooks };
