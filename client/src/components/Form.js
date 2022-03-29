import React from "react";
import { Container, Row } from "react-bootstrap";
import AuthorForm from "./AuthorForm";
import BookForm from "./BookForm";

function FormCreate() {
  return (
    <Container className="mt-5">
      <Row className="g-5">
        <AuthorForm></AuthorForm>
        <BookForm />
      </Row>
    </Container>
  );
}
export default FormCreate;
