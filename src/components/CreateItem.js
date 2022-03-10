import React from "react";
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

export const CreateItem = () => {
  return (
    <Container>
      <Form>
        <Row style={{ color: "white" }} className="createItemCol">
          {/* Item name */}
          <Form.Group
            controlId="createItemName"
            className="d-flex align-items-center"
          >
            <Col className="d-grid justify-content-end">
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                }}
              >
                Name:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="name"
                placeholder="name"
                style={{ marginLeft: "7px", width: "18rem" }}
              />
            </Col>
          </Form.Group>
          {/* Item Price */}
          <Form.Group
            controlId="formBasicEmail"
            className="d-flex align-items-center"
          >
            <Col className="d-grid justify-content-end">
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                }}
              >
                Price:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="price"
                placeholder="price"
                style={{ marginLeft: "7px", width: "18rem" }}
              />
            </Col>
          </Form.Group>

          {/* Upload Thumbnail */}
          <Form>
            <Form.Group
              className="d-flex align-items-center"
              controlId="uploadPicture"
              style={{ width: "292.74px" }}
            >
              <Col className="d-grid justify-content-end">
                <Form.Label
                  style={{
                    color: "white",
                    marginBottom: "0",
                  }}
                >
                  Select a Thumbnail:
                </Form.Label>
              </Col>
              <Col>
                <Form.Control type="file" accept="image/*" size="sm" />
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </Form>
    </Container>
  );
};
