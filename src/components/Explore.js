import React, { useState } from "react";
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

const ExploreItem = ({ id, src, name, title, price, bid, musicSrc }) => {
  const history = useHistory();

  return (
    <div
      className="d-grid justify-content-center expCSS"
      onClick={() => history.push(`/item/${id}`)}
    >
      <Image src={itemImages(src).default} className="expImg" fluid />
      <Player src={itemSounds(musicSrc).default} />
      <div className="expInfo">
        <Link to="/" className="text-decoration-none">
          <h6>{name}</h6>
          <h6>{title}</h6>
          <h6>{price}</h6>
          <h6>{bid}</h6>
        </Link>
      </div>
    </div>
  );
};

export const ExploreList = () => {
  return (
    <div style={{ backgroundColor: "#334756" }}>
      <Container
        style={{ marginTop: "40px", paddingTop: "25px", paddingBottom: "30px" }}
      >
        <DropButtons />
        <Row xxl={6} xl={6} lg={5} md={4} sm={3} xs={2}>
          {exploreInfo.map((item) => {
            return (
              <Col style={{ marginTop: "15px" }} key={item.id}>
                {/* <Link to="/" className="text-decoration-none"> */}

                <ExploreItem {...item}></ExploreItem>
                {/* </Link> */}
              </Col>
            );
          })}
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={4} md={3} sm={3} xs={2}></Col>

          <Col className="d-flex justify-content-center ">
            <Link to="/" className="text-decoration-none seeMore">
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
        <DropdownButton
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
        </DropdownButton>
      </Col>
    </Row>
  );
};
