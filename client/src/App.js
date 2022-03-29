import React from "react";

import { Container } from "react-bootstrap";
import FormCreate from "./components/Form";
import BookList from "./components/BookList";

function App() {
  return (
    <Container>
      <h1 className="text-center mt-3"> My Books</h1>
      <FormCreate />
      <BookList className="mt-5" />
    </Container>
  );
}

export default App;
