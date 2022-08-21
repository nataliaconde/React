import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = () => {
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
              to="/projects"
              style={{ color: "antiquewhite" }}
              className="myfont-small"
            >
              Projects
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
