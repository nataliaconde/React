import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const HomePage = () => {
  return (
    <>
      <Row className="col-sm-4 col-md-3 col-lg-2 mx-5 my-4 float-end">
        <button className="btn btn-outline-info">Download Resume</button>
      </Row>
      <Row className="mx-auto col-12">
        <Image
          src="/images/IMG_2146.jpg"
          className="col-5 col-xl-4 p-0 mx-auto"
          alt="Steve Fisher"
        />
      </Row>
      <h1 className="text-center">Steve Fisher</h1>
      <Row className="mx-auto text-center pt-4 col-12">
        <Link
          to="/projects"
          style={{ color: "antiquewhite" }}
          className="myfont"
        >
          My Projects
        </Link>
      </Row>
    </>
  );
};

export default HomePage;
