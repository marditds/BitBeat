import React, { useState } from "react";
import { Container, Col, Row, Tabs, Tab, Image } from "react-bootstrap";
import { ExploreItem } from "./Explore";
import { useMoralisCloudFunction } from "react-moralis";
import { useParams } from "react-router-dom";
import avatarDefault from "../images/avatarDefault.png";

const Profile = () => {
  const { data: users } = useMoralisCloudFunction("theUsers");
  const { data: collection } = useMoralisCloudFunction("getItems");

  const { id } = useParams();

  const user = users && users.find((person) => person.objectId === id);
  const username = user?.username ?? "Username";

  const items = collection && collection.filter((item) => item?.sellerUsername === username);

  console.log(items);

  function shortString(str) {
    return str && str.length > 25 ? str.substring(0, 25) + "..." : str;
  }

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
        <Tab eventKey="Collections" title="Collections">
          <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={1}>
            {items && items.map((itemInfo) => {
              return (
                <Col style={{ marginTop: "15px" }} key={itemInfo.tokenId}>
                  <ExploreItem {...itemInfo} ></ExploreItem>
                </Col>

              );
            })

            }
          </Row>
        </Tab>
        {/* <Tab eventKey="Creations" title="Creations">
          <p style={{ color: "white" }}>This is the Creations tab.</p>
        </Tab> */}

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
            <h3 style={{ fontFamily: "Epilogue" }}>{username}'s Profile</h3>
          </Col>
        </Row>
        <ProfileTabs />
      </Container>
    </div>
  );
};

export default Profile;
