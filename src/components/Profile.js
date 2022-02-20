import React, { useState, useEffect } from "react";
import { Container, Col, Row, Tabs, Tab } from "react-bootstrap";
// import axios from "axios";
// import { peopleInfo, profImages, itemSounds } from "../PeopleList";
import { useParams } from "react-router-dom";
import { Player2 } from "./Player2";
import { useMoralisCloudFunction } from "react-moralis";

const Creations = (props) => {
  return (
    <Row xl={5} lg={4} md={3} sm={2} xs={2}>
      {[...Array(props.itemCount)].map((e, i) => {
        return (
          <div key={i}>
            {props.username}
            <Player2 sound={props.sound} />
          </div>
        );
      })}
    </Row>
  );
};

const Profile = () => {
  // const [itemCount, setItemCount] = useState(0);
  // const [sold, setSold] = useState(0);
  // const [profPic, setPic] = useState([]);
  // const [sound, setSound] = useState([]);
  const [username, setUsername] = useState("Username");
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const { data } = useMoralisCloudFunction("theUsers", {
    autoFetch: true,
  });

  useEffect(() => {
    setUsers(data);
  }, [data]);

  function setPersonUsername() {
    const user =
      users[0] &&
      users[0].find((person) => person[0].objectId === parseInt(id));
    if (user) {
      setUsername(user[0].username);
      console.log(user[0].username);
    }
  }
  useEffect(setPersonUsername, [users, id]);
  // console.log(users[0].objectId);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     // .get(
  //     //   "https://bafyreibnlksobmrhubdfmnwjq2go5bt7s3at2rqlsk2rntorzcaorafeii.ipfs.dweb.link/metadata.json"
  //     // )
  //     .then((response) => {
  //       // var d = JSON.stringify(response.data);
  //       // setUsers(JSON.parse(d));
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error + "Hakooop");
  //     });
  // }, []);

  // function setPersonPic() {
  //   const User = peopleInfo.find((person) => person.id === parseInt(id));
  //   // setPic(profImages(User.src).default);
  // }
  // useEffect(setPersonPic, [id]);

  // function setPersonSound() {
  //   const User = peopleInfo.find((person) => person.id === parseInt(id));
  //   // setSound(itemSounds(User.musicSrc).default);
  // }
  // useEffect(setPersonSound, [id]);

  // function setCreationCount() {
  //   const User = peopleInfo.find((person) => person.id === parseInt(id));
  //   // setItemCount(User.itemCount);
  // }
  // useEffect(setCreationCount, [id]);

  // function setPersonSold() {
  //   const User = peopleInfo.find((person) => person.id === parseInt(id));
  //   // setSold(User.sold);
  // }
  // useEffect(setPersonSold, [id]);

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

          {/* <Creations
          username={username}
          itemCount={itemCount}
          sound={sound}
          ></Creations> */}
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
            <p>{username}</p>
            {/* <p>Sold: ${sold}</p> */}
          </Col>
          <ProfileTabs />
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
