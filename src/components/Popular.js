import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMoralisCloudFunction } from "react-moralis";
import {
  Container,
  Image,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import avatarDefault from "../images/avatarDefault.png";

const Popular = ({ objectId, avatar, username, email }) => {
  function shortString(str) {
    return str && str.length > 7 ? str.substring(0, 6) + "..." : str;
  }

  function profAvatar(avat) {
    return avat ? avat._url : avatarDefault;
  }

  return (
    <div
      className="justify-content-around d-flex align-items-center popCSS"
      key={objectId}
    >
      <h6> </h6>
      <Image
        src={profAvatar(avatar)}
        alt="profile_picutre"
        roundedCircle
        className="popImg"
      />
      <div>
        <h6>{shortString(username)}</h6>
        <h6>{shortString(email)}</h6>
      </div>
    </div>
  );
};

export const PopularList = () => {
  const { data } = useMoralisCloudFunction("theUsers", {
    autoFetch: true,
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <Container style={{ marginTop: "25px" }}>
      <DropButtons />
      <Row md={2}>
        {users &&
          users.map((user) => {
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
                key={user.objectId}
              >
                <Link
                  to={`/profile/${user.objectId}`}
                  className="text-decoration-none"
                >
                  <Popular {...user}></Popular>
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
        <h3 id="sellers">Our Creators</h3>
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
