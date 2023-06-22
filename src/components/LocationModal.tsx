import { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LocationModal.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const LocationModal = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(prevShow => !prevShow);
  };

  const center = { lat: 33.7488, lng: -84.3877 };

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };
  const apiKey = process.env.REACT_APP_API_KEY;
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");


  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>,
    setAddress: React.Dispatch<React.SetStateAction<string>>) => {
    setAddress(e.target.value);
  };


  return (
    <>
      <Button variant="primary" onClick={toggleModal} className="pantry-header-btn">
        Locate Pantries Nearby
      </Button>

      <Modal show={show} size="xl" className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Find Pantries Nearby </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="row">
            <div className="col-6 map-col">
              <LoadScript
                googleMapsApiKey='AIzaSyBKq9rsU60-KrpdwgcLogSpuE951MGFuAc'>
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={center}
                />
              </LoadScript>
              {/* <iframe title="googlemap"
                className="googlemap"
                loading="lazy"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                src="https://www.google.com/maps/embed/v1/view?zoom=11&center=33.7488%2C-84.3877&key=AIzaSyBKq9rsU60-KrpdwgcLogSpuE951MGFuAc">
              </iframe> */}
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
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => handleAddressChange(e, setAddress1)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LocationForm.Address2">
                  <Form.Label className="form-label">Address 2</Form.Label>
                  <Form.Control
                    type="address"
                    placeholder="Address 2"
                    autoFocus
                    value={address2}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => handleAddressChange(e, setAddress2)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LocationForm.City">
                  <Form.Label className="form-label">City</Form.Label>
                  <Form.Control
                    type="city"
                    placeholder="City"
                    autoFocus
                    value={city}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => handleAddressChange(e, setCity)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LocationForm.State">
                  <Form.Label className="form-label">State</Form.Label>
                  <Form.Control
                    type="state"
                    placeholder="State"
                    autoFocus
                    value={state}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => handleAddressChange(e, setState)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LocationForm.Zip">
                  <Form.Label className="form-label">Zip Code</Form.Label>
                  <Form.Control
                    type="zip"
                    placeholder="Zip Code"
                    autoFocus
                    value={zip}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => handleAddressChange(e, setZip)
                    }
                  />
                </Form.Group>

              </Form>
            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="{show?'secondary':'primary'}"
            onClick={toggleModal}>{show ? "Close" : "Locate"}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LocationModal;
