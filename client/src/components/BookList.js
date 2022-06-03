import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import BookDetails from "./BookDetails";
import { getAllBooks } from "../axios-graphql/api";

import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "../graphql/queries";

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null);

  // const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  // if (loading) return <p>Loading books....</p>;
  // if (error) return <p>Error loading books!</p>;
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllBooks()
      .then((res) => {
        setData(res.data.data.books);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Row>
      <h3 className="mt-4">List Books</h3>
      {data.map((book) => (
        <Col xs={6} md={3}>
          <Card
            border="info"
            text="info"
            className="text-center shadow mt-5"
            key={book.id}
            onClick={setBookSelected.bind(this, book.id)}
            style={{ cursor: "pointer" }}
          >
            <Card.Body>{book.name}</Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
