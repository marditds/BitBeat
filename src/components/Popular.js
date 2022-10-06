import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useMoralisCloudFunction } from "react-moralis";
import {
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { exploreInfo, itemImages } from "../ExploreInfo";
import { users } from "../Users";
// import avatarDefault from "../images/avatarDefault.png";

const Popular = ({ id, avatar, name, }) => {
  function shortString(str) {
    return str && str.length > 7 ? str.substring(0, 6) + "..." : str;
  }

  // function profAvatar(avat) {
  //   return avat ? avat._url : avatarDefault;
  // }

  // function returnAvatar(id, avatar) {
  //   for (let i = 0; i < exploreInfo.length; i++) {
  //     avatar = exploreInfo[id].avatar;
  //     return avatar;
  //   }
  // }

  return (
    <div
      className="justify-content-around d-flex align-items-center popCSS"
      key={id}
    >
      <h6> </h6>
      <Image
        src={itemImages((avatar)).default}
        alt="profile_picutre"
        roundedCircle
        className="popImg"
      />
      <div>
        <h6>{shortString(name)}</h6>
      </div>
    </div>
  );
};

export const PopularList = () => {
  // const { data } = useMoralisCloudFunction("theUsers");
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setUsers(exploreInfo);
  // }, []);

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
                key={user.userId}
              >
                <Link
                  to={`/profile/${user.userId}`}
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
  // const [val, setVal] = useState("Today");

  // const options = (e) => {
  //   setVal(e);
  // };

  // function stringControl(str) {
  //   return str && str.length < 5 ? str.substring(0, 4) + ":)" : str;
  // }

  return (
    <div className="d-flex align-items-center">
      <Col>
        <h3 id="creators">Our Creators</h3>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        {/* <Link to="/" className="text-decoration-none viewAll">
          View All
        </Link>
        <DropdownButton id="dropdownToggleCSS" title={stringControl(val)} onSelect={options} >
          <Dropdown.Item eventKey="Today" href="#" id="dropdownMenuCSS"  >
            Today
          </Dropdown.Item>
          <Dropdown.Item eventKey="Week" href="#" id="dropdownMenuCSS" >
            Week
          </Dropdown.Item>
          <Dropdown.Item eventKey="Month" href="#" id="dropdownMenuCSS" >
            Month
          </Dropdown.Item>
          <Dropdown.Item eventKey="Year" href="#" id="dropdownMenuCSS" >
            Year
          </Dropdown.Item>
        </DropdownButton> */}
      </Col>
    </div>
  );
};
