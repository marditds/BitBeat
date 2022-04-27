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
import { Player } from "./Player";

export const CreateItem = () => {
  const [title, setTitle] = useState();
  const [askingPrice, setaskingPrice] = useState();
  const [desc, setDesc] = useState();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState();
  const [sound, setSound] = useState(null);
  const [soundFile, setSoundFile] = useState(null);


  function shortPrice(str) {
    return str && str.length > 6 ? str.substring(0, 6) + "..." : str;
  }

  function shortDesc(str) {
    return str && str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  const onChangeTitle = (elem) => {
    setTitle((prevName) => elem.target.value);
  };

  const onChangePrice = (elem) => {
    setaskingPrice((prevPrice) => elem.target.value);
  };

  const onChangeDesc = (elem) => {
    setDesc((prevDesc) => elem.target.value);
  };

  const onChangeThumbnail = (e) => {
    if (e.target.files[0]) {
      setThumbnail((prevThumb) => e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setThumbnailFile((prevThumbFile) => reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeSound = (e) => {
    if (e.target.files[0]) {
      setSound((prevSound) => e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setSoundFile((prevSounfFile) => reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  function shortString(str) {
    return str && str.length > 200 ? str.substring(0, 200) + "..." : str;
  }

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
            <div className="d-grid justify-content-center expCSS" style={{ height: "100%" }}>
              <div className="thumbnail">
                <Image src={thumbnailFile ? thumbnailFile : thumbDefault} className="expImg" fluid />
                <Player sound={soundFile} />
              </div>

              <div className="expInfo">
                <h6>{title ? title : "NFT Title"}</h6>
                <h6>{shortPrice(askingPrice) ? shortPrice(askingPrice) : 0} ETH</h6>
                <h6>{shortDesc(desc) ? shortDesc(desc) : "Description"} </h6>
              </div>

            </div>
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
              value={title}
            >
              <Form.Label
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "auto",
                }}
              >
                Item Title:
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="item title"
                className="createItemFormCSS"
                value={title}
                onChange={onChangeTitle}
              />
            </Form.Group>

            {/* Item Price */}
            <Form.Group
              controlId="createItemPrice"
              className="d-flex align-items-center mb-3"
              value={askingPrice}
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
                type="number"
                placeholder="price (ETH)"
                className="createItemFormCSS"
                value={askingPrice}
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
                className="createItemFormCSS"
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
                className="createItemFormCSS"
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
                className="createItemFormCSS"
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

              <Form.Select aria-label=" " className="createItemFormCSS">
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
