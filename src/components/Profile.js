import React, { useState, useEffect } from "react";
import { Container, Col, Row, Tabs, Tab, Image, Button } from "react-bootstrap";
import { ItemSample } from "./ItemSample";
import { useMoralisCloudFunction, useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
import avatarDefault from "../images/avatarDefault.png";

const Profile = () => {
  const { data: users } = useMoralisCloudFunction("theUsers");
  const { data: userItems } = useMoralisCloudFunction("getUserItems");
  const { id } = useParams();
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    setItemData(userItems);
  }, [userItems]);


  const user = users && users.find((person) => person.objectId === id);
  const username = user?.username ?? "Username";

  const basicQuery = async () => {
    console.log(userItems);
  };

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
        className=" justify-content-center"
        activeKey={tabTitle}
        onSelect={switchTabs}
      >
        {/* COLLECTIONS TAB */}
        <Tab eventKey="Collections" title="Collections">

          <Button onClick={basicQuery} className="mb-5">Click Click Click</Button>
          <Row xxl={6} xl={6} lg={5} md={4} sm={3} xs={2}>
            {itemData && itemData.map((item) => {
              return (
                <Col style={{ marginTop: "15px" }} key={item.tokenObjectId}>
                  <ItemSample {...item}></ItemSample>
                </Col>
              );
            })}

          </Row>
        </Tab>

        <Tab eventKey="Creations" title="Creations">
          <p style={{ color: "white" }}>This is the Creations tab.</p>
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
