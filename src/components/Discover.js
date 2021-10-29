import React, { useState, useEffect } from "react";
import { RatingView } from "react-simple-star-rating";
import { exploreInfo, itemImages, itemSounds } from "../ExploreList";
import {
  Container,
  Image,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ItemModal } from "./ItemsModal";

export const Discover = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handleShowModal = (item) => {
    setItem(item);
    setShow(true);
  };

  return (
    <div style={{ backgroundColor: "#334756" }}>
      <Container
        style={{ marginTop: "40px", paddingTop: "25px", paddingBottom: "30px" }}
      >
        {item && <ItemModal show={show} setShow={setShow} item={item} />}
        <Row xxl={3} xl={3} lg={3} md={2} sm={2} xs={1}>
          {exploreInfo.map((item) => {
            return (
              <>
                <Col style={{ marginTop: "15px" }} key={item.id}>
                  <div
                    className="d-grid justify-content-center expCSS"
                    onClick={() => handleShowModal(item)}
                  >
                    <Image
                      src={itemImages(item.src).default}
                      className="expImg"
                      fluid
                    />
                    <div className="expInfo">
                      <h6>{item.name}</h6>
                      <h6>{item.title}</h6>
                      <h6>{item.price}</h6>
                      <h6>{item.bid}</h6>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
