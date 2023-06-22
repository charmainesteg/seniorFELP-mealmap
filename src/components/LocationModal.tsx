import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LocationModal.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import AddressForm from "./formGroup/FormGroup";
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

  const [addresses, setAddresses] = useState([
    { label: 'Address 1', type: 'text', placeholder: 'Address 1', value: '' },
    { label: 'Address 2', type: 'text', placeholder: 'Address 2', value: '' },
    { label: 'City', type: 'text', placeholder: 'City', value: '' },
    { label: 'State', type: 'text', placeholder: 'State', value: '' },
    { label: 'Zip Code', type: 'text', placeholder: 'Zip Code', value: '' },
  ]);



  // const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [address, setAddress] = useState("");

  // const updateAddress = () => {
  //   let address = address1.trim();
  //   if (address2.trim() !== "") {
  //     address += "," + address2.trim();
  //   };
  //   address += `, ${city.trim()}, ${state.trim()}, ${zip.trim()}`;
  //   setAddress(address);
  // };

  // useEffect(() => {
  //   updateAddress();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [address1, address2, city, state, zip,]);


  // const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>,
  //   setAddress: React.Dispatch<React.SetStateAction<string>>) => {
  //   setAddress(e.target.value);
  // };

  const handleAddressChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].value = e.target.value;
    setAddresses(updatedAddresses);
  };

  const handleLocate = () => {
    console.log("Address:", addresses);
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
                googleMapsApiKey={apiKey!}>
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
                {addresses.map((address, index) => (
                  <AddressForm
                    key={index}
                    label={address.label}
                    type={address.type}
                    placeholder={address.placeholder}
                    value={address.value}
                    onChange={(e) => handleAddressChange(index, e)}
                  />
                ))}
                {/* <Form.Group className="mb-3" controlId="LocationForm.Address1">
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
                </Form.Group> */}

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
      </Modal >
    </>
  );
};

export default LocationModal;
