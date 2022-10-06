import React, { useState } from "react";
import { Container, Col, Row, Tabs, Tab, Image } from "react-bootstrap";
import { ExploreItem } from "./Explore";
import { exploreInfo, itemImages, itemSounds } from "../ExploreInfo";
import { users } from "../Users";
// import { useMoralisCloudFunction } from "react-moralis";
import { useParams } from "react-router-dom";
import avatarDefault from "../images/avatarDefault.png";
import { ItemSample } from "./ItemSample";

const Profile = () => {
  // const { data: users } = useMoralisCloudFunction("theUsers");
  // const { data: collection } = useMoralisCloudFunction("getItems");

  const { id } = useParams();

  const user = users && users.find((person) => person.userId === id);
  const username = users[id].name ?? "Username";

  const items = exploreInfo && exploreInfo.filter((item) => item?.name === username);

  // const items = exploreInfo[id];

  console.log(username);


  // function shortString(str) {
  //   return str && str.length > 25 ? str.substring(0, 25) + "..." : str;
  // }

  var avatar = user?.avatar;

  function profAvatar(avat) {
    return avat ? avat._url : avatarDefault;
  }

  const ProfileTabs = () => {
    const [tabTitle, setTabTitle] = useState("Collections");

    const switchTabs = (e) => {
      setTabTitle(e);
    };

    return (
      <Tabs
        className=" justify-content-center createTabs"
        activeKey={tabTitle}
        onSelect={switchTabs}
      >
        {/* COLLECTIONS TAB */}
        <Tab eventKey="Collections" title="Creations">
          <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={1}>
            {items && items.map(({ thumbnail, sound, key, desc, ...item }) => {
              return (
                <Col style={{
                  marginTop: "15px"
                }}
                  key={key} >
                  <ExploreItem {...item}
                    urlKey={key}
                    thumbnail={itemImages(thumbnail).default}
                    sound={itemSounds(sound).default}
                  />
                </Col>
              )
            })}
            {/* {items && items.map(({ id, name, items }) => items.map(item => ({ id, name, ...item }))).flat().map(item =>
              <Col style={{
                marginTop: "15px"
              }}
                key={item.key} >
                <ExploreItem name={item.name}
                  title={item.title}
                  thumbnail={itemImages(item.thumbnail).default}
                  sound={itemSounds(item.sound).default}
                  price={item.price} />
              </Col>
            )} */}
          </Row>
        </Tab>

      </Tabs>
    );
  };


  avatar = users[id].avatar;

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
              src={itemImages(avatar).default}
              alt="profilePicture"
              roundedCircle
              fluid
              id="profPic"
            />
          </Col>
          <Col className="userInfoCol">
            <h3 style={{ fontFamily: "Epilogue", marginBottom: "0px" }}>{username}'s Profile</h3>
          </Col>
        </Row>
        <ProfileTabs />
      </Container>
    </div>
  );
};

export default Profile;
