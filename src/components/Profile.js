import React, { useState } from "react";
import { Container, Col, Row, Tabs, Tab, Image } from "react-bootstrap";
// import { Player2 } from "./Player2";
import { useMoralisCloudFunction } from "react-moralis";
import { useParams } from "react-router-dom";
import avatarDefault from "../images/avatarDefault.png";

// const Creations = (props) => {
//   return (
//     <Row xl={5} lg={4} md={3} sm={2} xs={2}>
//       {[...Array(props.itemCount)].map((e, i) => {
//         return (
//           <div key={i}>
//             {props.username}
//             <Player2 sound={props.sound} />
//           </div>
//         );
//       })}
//     </Row>
//   );
// };

const Profile = () => {
  const { data: users } = useMoralisCloudFunction("theUsers");
  const { id } = useParams();

  const user = users && users.find((person) => person.objectId === id);
  const username = user?.username ?? "Username";

  function shortString(str) {
    return str && str.length > 25 ? str.substring(0, 25) + "..." : str;
  }

  var avatar = user?.avatar;

  function profAvatar(avat) {
    return avat ? avat._url : avatarDefault;
  }

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
    <div>
      <Container style={{ paddingTop: "25px" }}>
        <Row
          lg={2}
          md={2}
          sm={1}
          xs={1}
          xxs={1}
          style={{ marginBottom: "25px" }}
        >
          <Col className="profPicCol">
            <Image
              src={profAvatar(avatar)}
              alt="profilePicture"
              roundedCircle
              fluid
              id="profPic"
            />
          </Col>
          <Col className="userInfoCol">
            <p>{shortString(username)}</p>
          </Col>
        </Row>
        <ProfileTabs />
      </Container>
    </div>
  );
};

export default Profile;
