import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image, Tabs, Tab } from "react-bootstrap";
import { peopleInfo, profImages } from "../PeopleList";
import { useParams } from "react-router-dom";

const Creations = () => {
  const [itemCount, setItemCount] = useState(0);
  const { id } = useParams();

  function setCreationCount() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setItemCount(User.itemCount);
  }
  useEffect(setCreationCount, []);
  return <div>{itemCount}</div>;
};

const Profile = () => {
  const [name, setName] = useState("Name");
  const [sold, setSold] = useState(0);
  const [profPic, setPic] = useState([]);
  const { id } = useParams();

  function setPersonName() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setName(User.name);
  }

  function setPersonSold() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setSold(User.sold);
  }

  function setPersonPic() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setPic(profImages(User.src).default);
  }

  useEffect(setPersonName, []);
  useEffect(setPersonSold, []);
  useEffect(setPersonPic, []);

  return (
    <div style={{ backgroundColor: "red" }}>
      <Container style={{ paddingTop: "25px" }}>
        <Row
          className="align-items-center"
          style={{ backgroundColor: "#FFFF" }}
        >
          <Col>
            <Image src={profPic} alt="" roundedCircle fluid id="profPic" />
          </Col>
          <Col>
            <p>{name}</p>
            <p>Sold: ${sold}</p>
          </Col>
          {/* </Row>
        <Row> */}
          <ProfileTabs />
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

const ProfileTabs = () => {
  const [tabTitle, setTabTitle] = useState("Creations");

  const switchTabs = (e) => {
    setTabTitle(e);
  };

  return (
    <Tabs
      className=" justify-content-center"
      activeKey={tabTitle}
      onSelect={switchTabs}
    >
      <Tab eventKey="Creations" title="Creations">
        <p>This is the Creations tab.</p>
        <Creations />
      </Tab>
      <Tab eventKey="Collections" title="Collections">
        <p>This is the Collections tab.</p>
      </Tab>
    </Tabs>
  );
};
