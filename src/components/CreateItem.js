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
import defaultImg from "../images/profPic.png";

export const CreateItem = () => {
  const [name, setName] = useState("Item Name");
  const [price, setPrice] = useState("0");

  const onChangeName = (elem) => {
    setName(elem.target.value);
  };

  const onChangePrice = (elem) => {
    setPrice(elem.target.value);
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
      >
        <Col>
          <ItemSample name={name} price={price} imgSRC={defaultImg} />
        </Col>
        <Col
          className="createItemCol"
          style={{ maxWidth: "415px", marginRight: "auto" }}
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
                type="name"
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
                type="price"
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
              />
            </Form.Group>

            {/* Item Sound Bite */}
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
              />
            </Form.Group>

            {/* Item Description */}
            <Form.Group
              controlId="createItemDesc"
              className="d-flex align-items-center mb-3"
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
                type="description"
                placeholder="description"
                style={{ marginLeft: "7px", maxWidth: "18rem" }}
                as="textarea"
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
