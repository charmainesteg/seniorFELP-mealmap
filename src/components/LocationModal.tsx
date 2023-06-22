import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LocationModal.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
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

  const handleAddressChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].value = e.target.value;
    setAddresses(updatedAddresses);
  };

  const handleLocate = () => {
    let addressSting = '';
    for (const address of addresses) {
      if (address !== null) { addressSting += (address.value + ' '); }
    }
    console.log(addressSting);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    version: 'weekly',
    googleMapsApiKey: apiKey!
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

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
              {isLoaded &&
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={center}
                  onLoad={onLoad}
                />
              }
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
