import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import  "./LocationModal.css"

const LocationModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="pantry-header-btn">
        Locate Pantries Nearby
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Find Pantries Nearby </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <div className="row">
                <div className="col-6 map-col">
                <iframe  title="googlemap" className="googlemap"  loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=11&center=33.7488%2C-84.3877&key=AIzaSyBKq9rsU60-KrpdwgcLogSpuE951MGFuAc"></iframe>
                </div>
           <div className="col-6">
           <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Street 1</Form.Label>
              <Form.Control
                type="street"
                placeholder="Street 1"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label className="form-label">Street 2</Form.Label>
              <Form.Control
                type="street"
                placeholder="Street 2"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="city"
                placeholder="City"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">State</Form.Label>
              <Form.Control
                type="state"
                placeholder="State"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Zip Code</Form.Label>
              <Form.Control
                type="zip"
                placeholder="Zip Code"
                autoFocus
              />
            </Form.Group>
        
          </Form>
           </div>
        
            </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* change onclick to locate using api */}
          <Button variant="primary" onClick={handleClose}>
            Locate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LocationModal;