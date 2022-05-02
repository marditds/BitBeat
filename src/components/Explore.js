import React, { useState, useEffect } from "react";
import { exploreInfo, itemImages, itemSounds } from "../ExploreList";
import {
  Container,
  Image,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Player } from "./Player";
import { useHistory } from "react-router-dom";
import { useMoralisCloudFunction } from "react-moralis";
import avatarDefault from "../images/avatarDefault.png";

export const ExploreList = () => {
  const { data } = useMoralisCloudFunction("getItems");

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    setItemData(data);
  }, [data]);

  console.log(itemData && "the number of items: " + itemData.length);

  return (
    <div style={{ backgroundColor: "#334756" }}>
      <Container
        style={{ marginTop: "40px", paddingTop: "25px", paddingBottom: "30px" }}
      >
        <DropButtons />
        <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
          {itemData && itemData.slice(0, 6).map((item) => {
            return (
              <Col style={{ marginTop: "15px" }} key={item.tokenId}>
                <ExploreItem {...item}></ExploreItem>
              </Col>
            );
          })}
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
    </div>
  );
};

const DropButtons = () => {
  const [val, setVal] = useState("Collections");
  const [val2, setVal2] = useState("Sale Type");
  const [val3, setVal3] = useState("Price");

  const options = (e) => {
    setVal(e);
  };

  const options2 = (e) => {
    setVal2(e);
  };

  const options3 = (e) => {
    setVal3(e);
  };

  return (
    <Row className="align-items-center">
      <Col>
        <h3 id="explore">Explore NFTs</h3>
      </Col>

      <Col className="d-flex justify-content-end">
        {/* <DropdownButton
          id="expdropdownToggleCSS"
          title={val}
          onSelect={options}
        >
          <Dropdown.Item eventKey="Collections" href="#" id="dropdownMenuCSS">
            Collections
          </Dropdown.Item>
          <Dropdown.Item eventKey="A" href="#" id="dropdownMenuCSS">
            A
          </Dropdown.Item>
          <Dropdown.Item eventKey="B" href="#" id="dropdownMenuCSS">
            B
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="expdropdownToggleCSS"
          title={val2}
          onSelect={options2}
        >
          <Dropdown.Item eventKey="Sale Type" href="#" id="dropdownMenuCSS">
            Sale Type
          </Dropdown.Item>
          <Dropdown.Item eventKey="A" href="#" id="dropdownMenuCSS">
            A
          </Dropdown.Item>
          <Dropdown.Item eventKey="B" href="#" id="dropdownMenuCSS">
            B
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="expdropdownToggleCSS"
          title={val3}
          onSelect={options3}
        >
          <Dropdown.Item eventKey="Price" href="#" id="dropdownMenuCSS">
            Price
          </Dropdown.Item>
          <Dropdown.Item eventKey="A" href="#" id="dropdownMenuCSS">
            A
          </Dropdown.Item>
          <Dropdown.Item eventKey="B" href="#" id="dropdownMenuCSS">
            B
          </Dropdown.Item>
        </DropdownButton>*/}
      </Col>
    </Row>
  );
};

export const ExploreItem = ({ tokenId, uid, src, sellerUsername, title, askingPrice, bid, musicSrc, tokenUri }) => {
  const history = useHistory();

  const [image, setImage] = useState([]);
  const [audio, setAudio] = useState([]);
  const [item, setItem] = useState([]);


  async function fetchData() {
    const response = await fetch(tokenUri);
    const json = await response.json();
    setImage(json.image);
    setAudio(json.audio);
    setItem(json);
  }

  useEffect(() => {
    fetchData();
  }, [image, audio, item]);



  function shortUsername(str) {
    return str && str.length > 10 ? str.substring(0, 10) + "..." : str;
  }

  function shortPrice(str) {
    return str && str.length > 6 ? str.substring(0, 6) + "..." : str;
  }

  function shortDesc(str) {
    return str && str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <div
      className="d-grid justify-content-center expCSS"
      onClick={() => history.push(`/item/${tokenId}`)}
      style={{ height: "100%" }}
    >
      <div className="thumbnail">
        <Image src={image ? image : avatarDefault} className="expImg" fluid style={{ height: "100%" }} />
        <Player sound={audio} />
      </div>
      <Link to={`/item/${tokenId}`} className="text-decoration-none">
        <div className="expInfo">
          <h6>By: {shortUsername(sellerUsername)}</h6>
          <h6>{item.name}</h6>
          <h6>{shortPrice(askingPrice)} ETH</h6>
          <h6>{shortDesc(item.description)} </h6>
        </div>
      </Link>
    </div>
  );
};