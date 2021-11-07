import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { peopleInfo, profImages, itemSounds } from "../PeopleList";
import { useParams } from "react-router-dom";
import { Player2 } from "./Player2";

const Creations = (props) => {
  return (
    <Row xl={5} lg={4} md={3} sm={2} xs={2}>
      {[...Array(props.itemCount)].map((e, i) => {
        return (
          <div key={i}>
            {props.name}
            <Player2 sound={props.sound} />
          </div>
        );
      })}
    </Row>
  );
};

const Profile = () => {
  const [name, setName] = useState("Name");
  const [itemCount, setItemCount] = useState(0);
  const [sold, setSold] = useState(0);
  const [profPic, setPic] = useState([]);
  const [sound, setSound] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get(
        "https://bafyreibnlksobmrhubdfmnwjq2go5bt7s3at2rqlsk2rntorzcaorafeii.ipfs.dweb.link/metadata.json"
      )
      .then((response) => {
        setUsers(JSON.parse(response.data));
        // setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function setPersonName() {
    const user = users.find((person) => person.id === parseInt(id));
    if (user) {
      setName(user.name);
    }
  }
  useEffect(setPersonName, [users]);

  function setPersonPic() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setPic(profImages(User.src).default);
  }
  useEffect(setPersonPic, []);

  function setPersonSound() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setSound(itemSounds(User.musicSrc).default);
  }
  useEffect(setPersonSound, []);

  function setCreationCount() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setItemCount(User.itemCount);
  }
  useEffect(setCreationCount, []);

  function setPersonSold() {
    const User = peopleInfo.find((person) => person.id === parseInt(id));
    setSold(User.sold);
  }
  useEffect(setPersonSold, []);

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

          <Creations
            itemCount={itemCount}
            name={name}
            sound={sound}
          ></Creations>
        </Tab>
        <Tab eventKey="Collections" title="Collections">
          <p>This is the Collections tab.</p>
        </Tab>
      </Tabs>
    );
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <Container style={{ paddingTop: "25px" }}>
        <Row
          className="align-items-center"
          style={{ backgroundColor: "green" }}
        >
          <Col>
            {/* <Image src={profPic} alt="" roundedCircle fluid id="profPic" /> */}
          </Col>
          <Col>
            <p>{name}</p>
            <p>Sold: ${sold}</p>
          </Col>
          <ProfileTabs />
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
