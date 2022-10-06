import React from "react";
// import { Link } from "react-router-dom";
// import { exploreInfo, itemImages } from "../ExploreInfo";
import { Container, Row, Col } from "react-bootstrap";
// import { ItemModal } from "./ItemsModal";
import { ExploreItem } from "./Explore";
import { exploreInfo, itemImages, itemSounds } from "../ExploreInfo";
// import { useMoralisCloudFunction } from "react-moralis";


export const Discover = () => {
  // const { data } = useMoralisCloudFunction("getItems");
  // const [itemData, setItemData] = useState([]);

  // useEffect(() => {
  //   setItemData(data);
  // }, [data]);

  // function shortDesc(str){

  // }

  return (
    <div style={{ backgroundColor: "#334756" }}>
      <Container
        style={{ paddingTop: "25px", paddingBottom: "45px" }}
      >
        <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
          {exploreInfo && exploreInfo.map(({ thumbnail, sound, key, desc, ...item }) => {
            return (
              <Col style={{
                marginTop: "15px"
              }}
                key={key}>
                <ExploreItem {...item}
                  urlKey={key}
                  thumbnail={itemImages(thumbnail).default}
                  sound={itemSounds(sound).default}
                />
              </Col>
            )
          })}
          {/* {exploreInfo && exploreInfo.map(({ id, name, items }) => items.map(item => ({ id, name, ...item }))).flat().map(item =>
            <Col style={{
              marginTop: "15px"
            }}
              key={item.key} >
              <ExploreItem name={item.name}
                title={item.title}
                thumbnail={itemImages(item.thumbnail).default}
                sound={itemSounds(item.sound).default}
                price={item.price} />
            </Col>
          )} */}
        </Row>
      </Container>
    </div>
  )

  // const [show, setShow] = useState(false);
  // const [item, setItem] = useState(null);

  // const handleShowModal = (item) => {
  //   setItem(item);
  //   setShow(true);
  // }; 

  // return (
  //   <div style={{ backgroundColor: "#334756" }}>
  //     <Container
  //       style={{ marginTop: "0px", paddingTop: "25px", paddingBottom: "30px" }}
  //     >
  //       {item && <ItemModal show={show} setShow={setShow} item={item} />}
  //       <Row xxl={4} xl={4} lg={3} md={2} sm={2} xs={2}>
  //         {exploreInfo.map((item) => {
  //           return (
  //             <>
  //               <Col style={{ marginTop: "15px" }} key={item.id}>
  //                 <div
  //                   className="d-grid justify-content-center expCSS"
  //                   onClick={() => handleShowModal(item)}
  //                 >
  //                   <Image
  //                     src={itemImages(item.src).default}
  //                     className="expImg"
  //                     fluid
  //                   />
  //                   <div className="expInfo">
  //                     <h6>{item.name}</h6>
  //                     <h6>{item.title}</h6>
  //                     <h6>{item.price}</h6>
  //                     <h6>{item.bid}</h6>
  //                   </div>
  //                 </div>
  //               </Col>
  //             </>
  //           );
  //         })}
  //       </Row>
  //     </Container>
  //   </div>
  // );
};
