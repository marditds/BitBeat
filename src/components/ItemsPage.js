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
import { Player } from "./Player";

export const ItemsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  //const [rating, setRating] = useState({});
  const [sameCreatorItems, setSameCreatorItems] = useState([]);

  useEffect(() => {
    const exploreItem = exploreInfo.find((item) => item.id === parseInt(id));
    setItem(exploreItem);
  }, []);

  useEffect(() => {
    setFiltedItem();
  }, [item]);

  const setFiltedItem = () => {
    if (item) {
      const filteredItems = exploreInfo.filter(
        (x) => x.creatorId == item.creatorId && x.id != item.id
      );
      setSameCreatorItems(filteredItems);
    }
  };

  const itemChangeHandler = (id) => {
    const changedItem = exploreInfo.find((item) => item.id === parseInt(id));
    setItem(changedItem);
  };

  return (
    <div style={{ backgroundColor: "#334756" }}>
      {item && (
        <Container
          style={{
            paddingTop: "25px",
            paddingBottom: "30px",
          }}
        >
          <Row>
            <Col key={item.id} xl={4} lg={6} md={6}>
              <Image
                src={itemImages(item.src).default}
                className="expImg"
                fluid
              />
            </Col>
            <Col xl={8} lg={6} md={6}>
              <Row className="itemDescSection">
                <Col>
                  <h1>{item.title}</h1>
                </Col>
                <Col>
                  <h1>{item.price}</h1>
                </Col>
              </Row>
              <Row className="itemDescSection">
                <Col>
                  <RatingView ratingValue={item.rating} size={30} />
                </Col>
              </Row>
              <Row className="itemDescSection">
                <Col>
                  <h3>{item.name}</h3>
                </Col>
              </Row>
              <Row className="itemDescSection">
                <Col>
                  <h6>Detailed description..</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}>
            {sameCreatorItems.map((item) => {
              return ItemsFromSameCreator(item, itemChangeHandler);
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

const ItemsFromSameCreator = (item, itemChangeHandler) => {
  return (
    <Col key={item.id}>
      <div
        className="d-flex expCSS flex-no-wrap"
        onClick={() => itemChangeHandler(item.id)}
      >
        <Image src={itemImages(item.src).default} className="itemImg" fluid />
        <div className="expInfo">
          <Row>
            {/* <Col>
              <h6>ID:</h6>
              <h6>Name:</h6>
              <h6>Title:</h6>
              <h6>Price:</h6>
              <h6>Bid:</h6>
            </Col>
            <Col>
              <h6>{item.id}</h6>
              <h6>{item.name}</h6>
              <h6>{item.title}</h6>
              <h6>{item.price}</h6>
              <h6>{item.bid}</h6>
            </Col> */}
            <Col>
              <h6>ID: {item.id}</h6>
              <h6>Name: {item.name}</h6>
              <h6>Title: {item.title}</h6>
              <h6>Price: {item.price}</h6>
              <h6>Bid: {item.bid}</h6>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};
