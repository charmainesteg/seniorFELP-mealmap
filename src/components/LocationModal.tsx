import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import  "./LocationModal.css"

const LocationModal = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  }

  const apiKey = process.env.REACT_APP_API_KEY;

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleAddress1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value)
  };

  const handleAddress2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value)
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value)
  }

  const [address, setAddress] = useState("")

  const updateAddress = () => {
    let address = address1.trim();
    if (address2.trim() !== "" ){
        address += "," + address2.trim();
    };
    address += `, ${city.trim()}, ${state.trim()}, ${zip.trim()}`;
    setAddress(address)

  }

  useEffect(() => {
    updateAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address1, address2, city, state, zip,]);

const handleLocate = () => {
    console.log("Address:", address)
}

  
  return (
    <>
      <Button variant="primary" onClick={toggleModal} className="pantry-header-btn">
        Locate Pantries Nearby
      </Button>

      <Modal show={show} onHide={toggleModal} size="xl" className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Find Pantries Nearby </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <div className="row">
                <div className="col-6 map-col">
                <iframe  title="googlemap" className="googlemap"  loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/view?zoom=11&center=33.7488%2C-84.3877&key=${apiKey}`}></iframe>
                </div>
           <div className="col-6">
           <Form>
            <Form.Group className="mb-3" controlId="LocationForm.Address1">
            <Form.Label className="form-label">Address 1</Form.Label>
              <Form.Control
                type="address"
                placeholder="Address 1"
                autoFocus
                value={address1}
                onChange={handleAddress1Change}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LocationForm.Address2">
            <Form.Label className="form-label">Address 2</Form.Label>
              <Form.Control
                type="address"
                placeholder="Address 2"
                autoFocus
                value={address2}
                onChange={handleAddress2Change}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LocationForm.City">
            <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="city"
                placeholder="City"
                autoFocus
                value={city}
                onChange={handleCityChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LocationForm.State">
            <Form.Label className="form-label">State</Form.Label>
              <Form.Control
                type="state"
                placeholder="State"
                autoFocus
                value={state}
                onChange={handleStateChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LocationForm.Zip">
            <Form.Label className="form-label">Zip Code</Form.Label>
              <Form.Control
                type="zip"
                placeholder="Zip Code"
                autoFocus
                value={zip}
                onChange={handleZipChange}
              />
            </Form.Group>
        
          </Form>
           </div>
        
            </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          {/* change onclick to locate using api */}
          <Button variant="primary" onClick={handleLocate}>
            Locate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LocationModal;
