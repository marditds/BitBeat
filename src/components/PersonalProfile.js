import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Form,
  Button,
  Image,
  Stack,
} from "react-bootstrap";
import { useMoralis, useMoralisFile } from "react-moralis";
import avatarDefault from "../images/avatarDefault.png";

export const PersonalProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { setUserData, user, isAuthenticated } = useMoralis();
  const { saveFile } = useMoralisFile();

  const [photoFile, setPhotoFile] = useState();
  const [photoFileName, setPhotoFileName] = useState();
  const [avatar, setAvatar] = useState();

  // <pre>{JSON.stringify(user)}</pre>;

  const handleSetUsername = (elem) => {
    setUsername(elem.target.value);
  };

  const handleSetEmail = (elem) => {
    setEmail(elem.target.value);
  };

  useEffect(() => {
    if (user) {
      setAvatar(user.attributes?.avatar?._url);
    }
  }, [user]);

  const onChangePhoto = (e) => {
    setPhotoFile(e.target.files[0]);
    setPhotoFileName(e.target.files[0].name);
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    const name = photoFileName;
    const file = photoFile;
    let pic = await saveFile(name, file);
    user.set("avatar", pic);
    await user.save();
    if (photoFileName != null && photoFile != null) {
      setAvatar(user.attributes.avatar._url);
    } else {
      alert("No File Chosen.");
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData({ username, email });
  };

  return (
    <Container>
      <Row
        className="d-flex flex-row-reverse"
        lg={2}
        md={2}
        sm={1}
        xs={1}
        xxs={1}
      >
        <Col className="d-flex flex-column justify-content-center align-items-start">
          <Form>
            <Form.Group
              className="mb-3 d-flex  align-items-end"
              controlId="nameEnteryArea"
              value={username}
            >
              <Form.Label style={{ color: "white" }}>Name: </Form.Label>
              <Form.Control
                type="name"
                placeholder={isAuthenticated ? user.get("username") : null}
                value={username}
                onChange={handleSetUsername}
                style={{ marginLeft: "9px" }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-end"
              controlId="emailEnteryArea"
              value={email}
            >
              <Form.Label style={{ color: "white" }}>Email: </Form.Label>
              <Form.Control
                type="email"
                placeholder={isAuthenticated ? user.get("email") : null}
                value={email}
                onChange={handleSetEmail}
                style={{ marginLeft: "7px" }}
              />
            </Form.Group>
          </Form>

          <div className="d-flex">
            <Form onSubmit={handleSubmitPhoto}>
              <Form.Group controlId="UploadPicture">
                <Form.Control
                  type="file"
                  accept="image/*"
                  size="sm"
                  onChange={onChangePhoto}
                />
              </Form.Group>
            </Form>
            <Button
              onClick={handleSubmitPhoto}
              style={{ marginLeft: "10px" }}
              size="sm"
            >
              Upload
            </Button>
          </div>

          <p className="saveInfoButton" onClick={handleSave}>
            Save Info
          </p>
        </Col>

        <Col>
          <Stack className="d-grid justify-content-end text-center">
            <Image
              src={avatar ? avatar : avatarDefault}
              style={{ width: "150px", height: "150px" }}
              roundedCircle
            />

            <p style={{ color: "white" }}>
              {isAuthenticated ? user.get("username") : null}
            </p>

            {/* <p style={{ color: "white" }}>
              {isAuthenticated ? user.get("email") : null}
            </p> */}
          </Stack>
        </Col>
      </Row>
      <ProfileTabs />
    </Container>
  );
};

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
        <p style={{ color: "white" }}>This is the Creations tab.</p>
      </Tab>
      <Tab eventKey="Collections" title="Collections">
        <p style={{ color: "white" }}>This is the Collections tab.</p>
      </Tab>
    </Tabs>
  );
};
