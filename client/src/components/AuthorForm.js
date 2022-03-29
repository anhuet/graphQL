import React, { useState } from "react";
import { Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../graphql/mutations";
import { GET_ALL_AUTHORS } from "../graphql/queries";

const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });
  const { name, age } = newAuthor;

  const handleInputChange = (e) => {
    setNewAuthor({ ...newAuthor, [e.target.name]: e.target.value });
  };

  const [createAuthor, { data, loading, error }] = useMutation(ADD_AUTHOR);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: GET_ALL_AUTHORS }],
    });
    if (data) {
      alert("Add Author success");
    }
    setNewAuthor({ name: "", age: "" });
  };
  return (
    <Col>
      <h3 className="mb-4">Create Author</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Author name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Author
        </Button>
        {!!loading && (
          <Spinner animation="border" role="status" className="ms-4">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Form>
    </Col>
  );
};

export default AuthorForm;
