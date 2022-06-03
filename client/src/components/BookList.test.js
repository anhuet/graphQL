import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookList from "./BookList";
import { GET_ALL_BOOKS } from "../graphql/queries";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

describe("BookList", () => {
  it("should check booklist", async () => {
    render(
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    );

    expect(await screen.findByText("anh")).toBeInTheDocument();
  });
});
