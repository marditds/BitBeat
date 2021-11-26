import React, { useState } from "react";
import { Container, Tab, Tabs, FloatingLabel, Form } from "react-bootstrap";
import { useMoralis } from "react-moralis";

export const PersonalProfile = () => {
  const [name, setName] = useState("");
  const { setUserData, user, isAuthenticated } = useMoralis();

  <pre>{JSON.stringify(user)}</pre>;

  const handleSetName = (elem) => {
    setName(elem.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData({ name: { name } });
  };

  if (isAuthenticated) {
    // setProfName(user.get("name"));
  }

  return (
    <Container>
      <p style={{ color: "white" }}></p>
      <div className="">
        <FloatingLabel
          controlId="floatingInput"
          label="Your Name:"
          className="mb-5"
          style={{ width: "25%", marginLeft: "auto", marginRight: "auto" }}
          className=""
          value={name}
        >
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={handleSetName}
          />
        </FloatingLabel>
        <p className="saveInfoButton" onClick={handleSave}>
          Save Info
        </p>
      </div>
      {/* <p style={{ color: "white" }}>Name:{profName}</p> */}
      <p style={{ color: "white" }}>Sold:</p>

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
