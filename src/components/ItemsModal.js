import { Col, Image, Modal, Row } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";
import { itemImages } from "../ExploreInfo";

export const ItemModal = ({ show, setShow, item }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w itemsModal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Item Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="itemModalBody">
          <Row>
            <Col>
              <div className="itemPriceBox">{item.price}</div>
              <Image
                src={itemImages(item.src).default}
                className="itemDiscoverImg"
                fluid
              />
            </Col>
          </Row>
          <Row className="itemDescSectionInModal">
            <Col>
              <h1>{item.title}</h1>
              <RatingView ratingValue={item.rating} size={30} />
            </Col>
          </Row>
          <Row className="itemDescSectionInModal">
            <Col>
              <h3>{item.name}</h3>
            </Col>
          </Row>
          <Row className="itemDescSectionInModal">
            <Col>
              <h6>Detailed description</h6>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
