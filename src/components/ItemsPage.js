import React, { useState, useEffect } from "react";
import { RatingView } from "react-simple-star-rating";
import { exploreInfo, itemImages } from "../ExploreList";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMoralisCloudFunction, useMoralisQuery } from "react-moralis";
import { ItemSample } from "./ItemSample";
import avatarDefault from "../images/avatarDefault.png";

export const ItemsPage = () => {
  const { data } = useMoralisCloudFunction("getItems");
  const { id } = useParams();

  //const [rating, setRating] = useState({});
  // const [sameCreatorItems, setSameCreatorItems] = useState([]);

  const item = data && data.find((nft) => nft.tokenId === id);
  const sellerUsername = item?.sellerUsername ?? "BitBeat User";
  const askingPrice = item?.askingPrice ?? "0";


  const testData = () => {
    console.log(item);
  }

  // useEffect(() => {
  //   const exploreItem = theItem && theItem.find((item) => theItem.tokenId === parseInt(id));
  //   setItem(exploreItem);
  // }, [id]);




  // useEffect(() => {
  //   setFilteredItem();
  // }, [item]);

  // const setFilteredItem = () => {
  //   if (item) {
  //     const filteredItems = item.filter(
  //       (x) => x.creatorId === item.creatorId && x.id !== item.tokenId
  //     );
  //     setSameCreatorItems(filteredItems);
  //   }
  // };

  const itemChangeHandler = (id) => {
    const changedItem = exploreInfo.find((item) => item.id === parseInt(id));
    // setItem(changedItem);
  };

  return (
    <div style={{ backgroundColor: "#334756" }}>

      <Container>
        <h2 style={{ fontFamily: "Epilogue", color: "white" }} className="mb-0">NFT By: {sellerUsername}</h2>
        <Button onClick={testData}>Click Click Click</Button>

        <ItemSample askingPrice={askingPrice} />

      </Container>

      {/* {item && ( 


      <Container
        style={{
          paddingTop: "25px",
          paddingBottom: "30px",
        }}
      >

        <Row>

          <Button onClick={testData}>Click Click Click</Button>
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
                <h6>Detailed descriptions..</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}>
          {/* {sameCreatorItems.map((item) => {
              return ItemsFromSameCreator(item, itemChangeHandler);
            })} 
        </Row>
      </Container> 
      )}*/}
    </div>
  );
};

// const ItemsFromSameCreator = (item, itemChangeHandler) => {
//   return (
//     <Col key={item.id}>
//       <div
//         className="d-flex expCSS flex-no-wrap"
//         onClick={() => itemChangeHandler(item.id)}
//       >
//         <Image src={itemImages(item.src).default} className="itemImg" fluid />
//         <div className="expInfo">
//           <Row>
//             {/* <Col>
//               <h6>ID:</h6>
//               <h6>Name:</h6>
//               <h6>Title:</h6>
//               <h6>Price:</h6>
//               <h6>Bid:</h6>
//             </Col>
//             <Col>
//               <h6>{item.id}</h6>
//               <h6>{item.name}</h6>
//               <h6>{item.title}</h6>
//               <h6>{item.price}</h6>
//               <h6>{item.bid}</h6>
//             </Col> */}
//             <Col>
//               <h6>ID: {item.id}</h6>
//               <h6>Name: {item.name}</h6>
//               <h6>Title: {item.title}</h6>
//               <h6>Price: {item.price}</h6>
//               <h6>Bid: {item.bid}</h6>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Col>
//   );
// };
