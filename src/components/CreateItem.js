import React, { useState } from "react";
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
import { ItemSample } from "./ItemSample";
import thumbDefault from "../images/avatarDefault.png";

export const CreateItem = () => {
  const [name, setName] = useState("Item Name");
  const [price, setPrice] = useState("0");
  const [desc, setDesc] = useState("Description");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(thumbDefault);
  const [sound, setSound] = useState(null);
  const [soundFile, setSoundFile] = useState(null);

  const onChangeName = (elem) => {
    setName(elem.target.value);
  };

  const onChangePrice = (elem) => {
    setPrice(elem.target.value);
  };

  const onChangeDesc = (elem) => {
    setDesc(elem.target.value);
  };

  const onChangeThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setThumbnailFile(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const onChangeSound = (e) => {
    if (e.target.files[0]) {
      setSound(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setSoundFile(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Container>
      <Row
        xl={2}
        lg={2}
        md={2}
        sm={1}
        xs={1}
        xxs={1}
        style={{ marginTop: "15px" }}
        className="createTabContent"
      >
        <Col>
          <div style={{ maxWidth: "280px", margin: "auto" }}>
            <h3 style={{ color: "white", fontFamily: "Epilogue" }}>Preview</h3>
            <ItemSample
              name={name}
              price={price}
              imgSRC={thumbnailFile}
              soundSRC={soundFile}
              desc={desc}
            />
          </div>
        </Col>
        <Col
          className="createItemCol"
          style={{
            maxWidth: "415px",

            marginTop: "40.03px",
          }}
        >
          <Form>
            {/* Item name */}
            <Form.Group
              controlId="createItemName"
              className="d-flex align-items-center mb-3"
              value={name}
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Name:
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="name"
                style={{
                  marginLeft: "7px",
                  maxWidth: "18rem",
                }}
                value={name}
                onChange={onChangeName}
              />
            </Form.Group>

            {/* Item Price */}
            <Form.Group
              controlId="createItemPrice"
              className="d-flex align-items-center mb-3"
              value={price}
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Price:
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="price"
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
                value={price}
                onChange={onChangePrice}
              />
            </Form.Group>

            {/* Upload Thumbnail */}
            <Form.Group
              className="d-flex align-items-center mb-3"
              controlId="createItemThumb"
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Thumbnail:
              </Form.Label>

              <Form.Control
                type="file"
                accept="image/*"
                size="sm"
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
                onChange={onChangeThumbnail}
              />
            </Form.Group>

            {/* Upload Sound Bite */}
            <Form.Group
              className="d-flex align-items-center mb-3"
              controlId="createItemAudio"
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Audio:
              </Form.Label>

              <Form.Control
                type="file"
                accept="audio/*"
                size="sm"
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
                onChange={onChangeSound}
              />
            </Form.Group>

            {/* Item Description */}
            <Form.Group
              controlId="createItemDesc"
              className="d-flex align-items-center mb-3"
              value={desc}
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Description:
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="description"
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
                as="textarea"
                value={desc}
                onChange={onChangeDesc}
              />
            </Form.Group>

            {/* Item Status */}
            <Form.Group
              controlId="createItemStatus"
              className="d-flex align-items-center mb-3"
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Status:
              </Form.Label>

              <Form.Select
                aria-label=" "
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
              >
                <option className="opt">Select</option>
                <option className="opt" value="1">
                  Not For Sale
                </option>
                <option className="opt" value="2">
                  Instant Buy
                </option>
                <option className="opt" value="3">
                  Accept Offers
                </option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Button size="md" id="createItemButton" style={{ float: "right" }}>
            Create
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
