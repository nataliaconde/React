import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ProjectsPage = () => {
  const issueTracker = () => {
    window.open("https://flexxall-issue-tracker.herokuapp.com");
  };

  const reduxTodo = () => {
    window.open("https://flexxall-redux-todo.herokuapp.com/");
  };

  const shoppingCart = () => {
    window.open("https://flexxall-shopping-cart.herokuapp.com");
  };

  return (
    <>
      <Container>
        <Row className="pt-4 col-12">
          <Col className="text-start">
            <Link
              to="/"
              style={{ color: "antiquewhite" }}
              className="myfont-small"
            >
              Home
            </Link>
          </Col>
          <Col className="text-end">
            <Link
              to="/about"
              style={{ color: "antiquewhite" }}
              className="myfont-small"
            >
              About
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{ width: "25rem" }}
              className="mx-auto mt-5 rounded-2 align-items-center"
            >
              <div style={{ cursor: "pointer" }} onClick={issueTracker}>
                <Card.Img
                  src="/images/logo.png"
                  className="card-img-top"
                  alt="Something"
                />
              </div>
              <Card.Body>
                <Card.Title>Flexxall's Issue Tracker</Card.Title>
                <Card.Text>MERN stack with Redux</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "25rem" }}
              className="mx-auto mt-5 rounded-2 align-items-center"
            >
              <div style={{ cursor: "pointer" }} onClick={reduxTodo}>
                <Card.Img
                  src="/images/logo.png"
                  className="card-img-top"
                  alt="Something"
                />
              </div>
              <Card.Body>
                <Card.Title>Todo List</Card.Title>
                <Card.Text>Simple Todo List with Redux</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{ width: "25rem" }}
              className="mx-auto mt-5 rounded-2 align-items-center"
            >
              <div style={{ cursor: "pointer" }} onClick={shoppingCart}>
                <Card.Img
                  src="/images/logo.png"
                  className="card-img-top"
                  alt="Something"
                />
              </div>
              <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <Card.Text>
                  Shopping Cart featuring Search and filter by price, ratings,
                  stock and delivery
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "25rem" }}
              className="mx-auto mt-5 rounded-2 align-items-center"
            >
              <div style={{ cursor: "pointer" }} onClick={issueTracker}>
                <Card.Img
                  src="/images/logo.png"
                  className="card-img-top"
                  alt="Something"
                />
              </div>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;
