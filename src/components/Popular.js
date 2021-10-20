import React, { useState } from "react";
import { Link } from "react-router-dom";
import { peopleInfo, profImages } from "../PeopleList";
import {
  Container,
  Image,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Popular = ({ id, src, name, sold }) => {
  return (
    <div
      className="justify-content-around d-flex align-items-center popCSS"
      key={id}
    >
      <h6>{id}</h6>
      <Image
        src={profImages(src).default}
        alt=""
        roundedCircle
        className="popImg"
      />
      <div>
        <h6>{name}</h6>
        <h6>${sold}</h6>
      </div>
    </div>
  );
};

export const PopularList = () => {
  return (
    <Container style={{ marginTop: "25px" }}>
      <DropButtons />
      <Row md={2}>
        {peopleInfo.map((popularInfo) => {
          return (
            <Col
              xxl={2}
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={6}
              className="d-felx align-self-end"
              style={{ marginTop: "5px" }}
              key={popularInfo.id}
            >
              <Link
                to={`/profile/${popularInfo.id}`}
                className="text-decoration-none"
              >
                <Popular {...popularInfo}></Popular>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const DropButtons = () => {
  const [val, setVal] = useState("Today");
  const options = (e) => {
    setVal(e);
  };

  return (
    <div className="d-flex align-items-center">
      <Col>
        <h3 id="sellers">Popular Sellers</h3>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <Link to="/" className="text-decoration-none viewAll">
          View All
        </Link>
        <DropdownButton id="dropdownToggleCSS" title={val} onSelect={options}>
          <Dropdown.Item eventKey="Today" href="#" id="dropdownMenuCSS">
            Today
          </Dropdown.Item>
          <Dropdown.Item eventKey="This Week" href="#" id="dropdownMenuCSS">
            This Week
          </Dropdown.Item>
          <Dropdown.Item eventKey="This Month" href="#" id="dropdownMenuCSS">
            This Month
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </div>
  );
};
