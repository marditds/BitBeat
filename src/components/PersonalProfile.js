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
} from "react-bootstrap";
import { useMoralis, useMoralisFile } from "react-moralis";
import avatarDefault from "../images/avatarDefault.png";
import { CreateItem } from "./CreateItem";

export const PersonalProfile = () => {
  const { setUserData, user, isAuthenticated } = useMoralis();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [saveInfoStaus, setSaveInfoStatus] = useState(true);
  const { saveFile } = useMoralisFile();
  const [photoFile, setPhotoFile] = useState(avatarDefault);
  const [avatar, setAvatar] = useState();
  const [uploadStatus, setUploadStatus] = useState(true);

  // <pre>{JSON.stringify(user)}</pre>;

  const onChangeUsername = (elem) => {
    setUsername(elem.target.value);
    if (elem.target.value) {
      setSaveInfoStatus(false);
    } else {
      setSaveInfoStatus(true);
    }
  };

  const onChangeEmail = (elem) => {
    setEmail(elem.target.value);
    if (elem.target.value) {
      setSaveInfoStatus(false);
    } else {
      setSaveInfoStatus(true);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (username && email === "") {
      setUserData({ username });
      alert(username + " was saved sucessfully.");
    } else if (email && username === "") {
      setUserData({ email });
      alert(email + " was saved sucessfully.");
    } else {
      setUserData({ username, email });
      alert("Your info was saved sucessfully.");
    }
  };

  useEffect(() => {
    if (user) {
      setAvatar(user.attributes?.avatar?._url);
    }
  }, [user]);

  const onChangePhoto = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
      setUploadStatus(false);
    } else {
      setUploadStatus(true);
    }
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    const file = photoFile;
    const name = photoFile.name;
    let pic = await saveFile(name, file);
    user.set("avatar", pic);
    await user.save();
    if (photoFile.name) {
      setAvatar(user.attributes.avatar._url);
    } else {
      alert("No File Chosen.");
    }
  };

  return (
    <Container>
      <Row
        className="d-flex "
        lg={2}
        md={2}
        sm={1}
        xs={1}
        xxs={1}
        style={{ marginTop: "15px", marginBottom: "20px" }}
      >
        <Col className="personalProfPicCol">
          <Image
            src={avatar ? avatar : avatarDefault}
            className="personalProfPic"
            roundedCircle
          />

          {/* <p style={{ color: "white" }}>
              {isAuthenticated ? user.get("username") : "Your Name"}
            </p> */}

          {/* <p style={{ color: "white" }}>
              {isAuthenticated ? user.get("email") : null}
            </p> */}
        </Col>
        <Col className="nameEmailCol">
          <Form>
            <Form.Group
              className="mb-3 d-flex align-items-end"
              controlId="nameEntryArea"
              value={username}
            >
              <Form.Label style={{ color: "white", marginRight: "auto" }}>
                Name:
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={isAuthenticated ? user.get("username") : null}
                value={username}
                onChange={onChangeUsername}
                style={{ marginLeft: "7px", width: "15rem" }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-end"
              controlId="emailEntryArea"
              value={email}
            >
              <Form.Label style={{ color: "white", marginRight: "auto" }}>
                Email:
              </Form.Label>
              <Form.Control
                type="email"
                placeholder={isAuthenticated ? user.get("email") : null}
                value={email}
                onChange={onChangeEmail}
                style={{ marginLeft: "7px", width: "15rem" }}
              />
            </Form.Group>
          </Form>

          <div className="d-flex" style={{ width: "292.74px" }}>
            <Form onSubmit={handleSubmitPhoto}>
              <Form.Group controlId="uploadPicture">
                <Form.Control
                  type="file"
                  accept="image/*"
                  size="sm"
                  onChange={onChangePhoto}
                />
              </Form.Group>
            </Form>
            <Button
              type="button"
              onClick={handleSubmitPhoto}
              id="uploadButton"
              size="sm"
              disabled={uploadStatus}
            >
              Upload
            </Button>
          </div>

          <Button
            size="sm"
            id="saveInfoButton"
            onClick={handleSave}
            disabled={saveInfoStaus}
          >
            Save Info
          </Button>
        </Col>
      </Row>
      <ProfileTabs />
    </Container>
  );
};

const ProfileTabs = () => {
  const [tabTitle, setTabTitle] = useState("Create");

  const switchTabs = (e) => {
    setTabTitle(e);
  };

  return (
    <Tabs
      className=" justify-content-center"
      activeKey={tabTitle}
      onSelect={switchTabs}
    >
      <Tab eventKey="Create" title="Create">
        <CreateItem />
      </Tab>
      <Tab eventKey="Collections" title="Collections">
        <p style={{ color: "white" }}>This is the Collections tab.</p>
      </Tab>
    </Tabs>
  );
};
