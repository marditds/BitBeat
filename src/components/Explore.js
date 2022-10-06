import React, { useState, useEffect } from "react";
import { exploreInfo, itemImages, itemSounds } from "../ExploreInfo";
import {
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Player } from "./Player";
import { useHistory } from "react-router-dom";

export const ExploreList = () => {
  return (
    <div style={{ backgroundColor: "#334756" }}>
      <Container
        style={{ marginTop: "40px", paddingTop: "25px", paddingBottom: "30px" }}
      >
        <DropButtons />
        <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
          {exploreInfo && exploreInfo.slice(0, 6).map((item) => {
            return (
              <Col style={{ marginTop: "15px" }} key={item.key}>
                <ExploreItem id={item.id}
                  urlKey={item.key}
                  name={item.name}
                  title={item.title}
                  price={item.price}
                  thumbnail={itemImages(item.thumbnail).default}
                  sound={itemSounds(item.sound).default}
                ></ExploreItem>
              </Col>
            );
          })}
          {/* {exploreInfo && exploreInfo.map(({ id, name, items }) => items.map(item => ({ id, name, ...item }))).flat().slice(0, 6).map(item =>
            <Col style={{
              marginTop: "15px"
            }}
              key={item.key} >
              <ExploreItem
                id={item.key}
                name={item.name}
                title={item.title}
                thumbnail={itemImages(item.thumbnail).default}
                sound={itemSounds(item.sound).default}
                price={item.price} />
            </Col>
          )}; */}

          {/* {exploreInfo && exploreInfo.map(person => person.items).flat().slice(0, 6).map(item =>
            <Col style={{
              marginTop: "15px"
            }} >
              <ExploreItem title={item.title}
                thumbnail={itemImages(item.thumbnail).default}
                sound={itemSounds(item.sound).default}
                price={item.price} />
            </Col>
          )
          } */}
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col lg={4} md={3} sm={3} xs={2}></Col>

          <Col className="d-flex justify-content-center ">
            <Link to="/discover" className="text-decoration-none seeMore">
              See More
            </Link>
          </Col>
          <Col lg={4} md={3} sm={3} xs={2}></Col>
        </Row>
      </Container>
    </div >
  );
};

const DropButtons = () => {

  return (
    <Row className="align-items-center">
      <Col>
        <h3 id="explore">Explore NFTs</h3>
      </Col>
      <Col className="d-flex justify-content-end"></Col>
    </Row>
  );
};

export const ExploreItem = ({ id, thumbnail, name, title, price, sound, desc, items, urlKey }) => {
  const history = useHistory();

  // const [image, setImage] = useState([]);
  // const [audio, setAudio] = useState([]);
  // const [item, setItem] = useState([]);


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(tokenUri);
  //     const json = await response.json();
  //     setImage(json.image);
  //     setAudio(json.audio);
  //     setItem(json);
  //   }
  //   ;
  //   fetchData();
  // }, [tokenUri]);



  function shortUsername(str) {
    return str && str.length > 10 ? str.substring(0, 10) + "..." : str;
  }

  function shortPrice(str) {
    return str && str.length > 6 ? str.substring(0, 6) + "..." : str;
  }

  function shortDesc(str) {
    return str && str.length > 36 ? str.substring(0, 36) + "..." : str;
  }

  return (
    <div
      className="d-grid justify-content-center expCSS"
      onClick={() => history.push(`/item/${urlKey}`)}
      style={{ height: "100%" }}
    >
      <div className="thumbnail">
        <Image src={thumbnail} className="expImg" fluid style={{ height: "100%" }} />
        <Player sound={sound} />
      </div>
      <Link to={`/item/${urlKey}`} className="text-decoration-none">
        <div className="expInfo">
          <h6 class="title">{title}</h6>
          <h6 class="price">{shortPrice(price)} ETH</h6>
          <h6>{shortDesc(desc)} </h6>
          <h6><span style={{ color: "#cccccc" }}>By:</span> {shortUsername(name)}</h6>
        </div>
      </Link>
    </div >
  );
};