import React from "react";
// import { RatingView } from "react-simple-star-rating";
import { exploreInfo, itemImages, itemSounds } from "../ExploreInfo";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { useMoralisCloudFunction } from "react-moralis";
// import { ItemSample } from "./ItemSample";
import { Player } from "./Player";
// import avatarDefault from "../images/avatarDefault.png";

export const ItemsPage = () => {
  // const { data } = useMoralisCloudFunction("getItems");
  const { urlKey } = useParams();

  const item = exploreInfo && exploreInfo.find((nft) => nft.key === +urlKey);
  const name = item.name ?? "BitBeat User";
  const price = item.price ?? "0";
  const thumbnail = item.thumbnail;
  const sound = item.sound;

  console.log(item);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(item && item.tokenUri);
  //     const json = await response.json();
  //     setImage(json.image);
  //     setAudio(json.audio);
  //     setTheItem(json);
  //   };
  //   fetchData();
  // }, [item]);


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

  // const itemChangeHandler = (id) => {
  //   const changedItem = exploreInfo.find((item) => item.id === parseInt(id));
  //   // setItem(changedItem);
  // };

  return (
    <div style={{ backgroundColor: "#334756" }} className="p-4">

      <Container>
        <Row>
          <h2 style={{ fontFamily: "Epilogue", color: "white" }}><span style={{ color: "#cccccc" }}>NFT By:</span> {name}
          </h2>
        </Row>
        <Row>
          <Col md={6} sm={12} >
            <div className="d-flex justify-content-center" style={{ position: "relative" }}>
              <Image src={itemImages(thumbnail).default} className="rounded-3" fluid />
              <Player sound={itemSounds(sound).default} />
            </div>
          </Col>
          <Col style={{ color: "white" }} className="d-flex flex-column justify-content-evenly">
            <Row style={{ fontSize: "1.2rem" }} className="mt-lg-0 mb-lg-0 mt-3 mb-3">
              <div style={{ color: "#cccccc", fontFamily: "Epilogue" }}>NFT Title:</div>
              <div style={{ fontSize: "1.5rem", fontFamily: "Epilogue" }}>{item.title}</div>
            </Row>
            <hr className="mt-0 mb-0 pt-0 pb-0" style={{ color: "#F0A500", height: "2px" }} />
            <Row style={{ fontSize: "1.2rem" }} className="mt-lg-0 mb-lg-0 mt-3 mb-3">
              <div style={{ color: "#cccccc", fontFamily: "Epilogue" }}>Price:</div>
              <div style={{ fontSize: "1.5rem", fontFamily: "Epilogue" }}>{price} ETH</div>
            </Row>
            <hr className="mt-0 mb-0 pt-0 pb-0" style={{ color: "#F0A500", height: "2px" }} />
            <Row style={{ fontSize: "1.2rem" }} className="mt-lg-0 mb-lg-0 mt-3 mb-3">
              <div style={{ color: "#cccccc", fontFamily: "Epilogue" }}>Description:</div>
              <div style={{ fontSize: "1rem", fontFamily: "Epilogue" }}>{item.desc}</div>
            </Row>
          </Col>

        </Row>

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
    </div >
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
