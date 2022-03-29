import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { ADD_BOOK } from "../graphql/mutations";
import { GET_ALL_AUTHORS, GET_ALL_BOOKS } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const { name, genre, authorId } = newBook;
  const [createBook, { data, loading }] = useMutation(ADD_BOOK);
  const { loading: getAuthorLoading, data: AuthorData } =
    useQuery(GET_ALL_AUTHORS);
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    createBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GET_ALL_BOOKS }],
    });
  };
  return (
    <Col>
      <h3 className="mb-4">Create Book</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Book name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book's name"
            onChange={handleInputChange}
            name="name"
            required
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter book's genre"
            onChange={handleInputChange}
            name="genre"
            value={genre}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Select
            aria-label="Author"
            onChange={handleInputChange}
            name="authorId"
          >
            <option>Select Author</option>
            {AuthorData &&
              AuthorData.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Book
        </Button>
      </Form>
    </Col>
  );
};

export default BookForm;
