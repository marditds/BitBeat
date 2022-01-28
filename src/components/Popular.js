import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
        // src={profImages(src).default}
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      // .get("https://zk0p00pjcbme.usemoralis.com:2053/server")
      .get("https://jsonplaceholder.typicode.com/users")
      // .get(
      //   "https://bafyreibnlksobmrhubdfmnwjq2go5bt7s3at2rqlsk2rntorzcaorafeii.ipfs.dweb.link/metadata.json"
      // )
      .then((response) => {
        // setUsers(JSON.parse(response.data));
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container style={{ marginTop: "25px" }}>
      <DropButtons />
      <Row md={2}>
        {users.map((userInfo) => {
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
              key={userInfo.id}
            >
              <Link
                to={`/profile/${userInfo.id}`}
                className="text-decoration-none"
              >
                <Popular {...userInfo}></Popular>
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
          <Dropdown.Item eventKey="This Year" href="#" id="dropdownMenuCSS">
            This Year
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </div>
  );
};
