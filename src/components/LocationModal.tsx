import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LocationModal.css";
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import AddressForm, { FormControlChangeEvent } from "./formGroup/FormGroup";
const LocationModal = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [show, setShow] = useState(false);
  const [map, setMapOptions] = useState({
    center: {
      lat: 33.7488, lng: -84.3877
    },
    zoom: 10
  });
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([
    { label: 'Address 1', type: 'text', placeholder: 'Address 1', value: '' },
    { label: 'Address 2', type: 'text', placeholder: 'Address 2', value: '' },
    { label: 'City', type: 'text', placeholder: 'City', value: '' },
    { label: 'State', type: 'select', placeholder: 'State', value: '' },
    { label: 'Zip Code', type: 'text', placeholder: 'Zip Code', value: '' },
  ]);

  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    version: 'weekly',
    googleMapsApiKey: apiKey!
  });

  const toggleModal = () => {
    setShow(prevShow => !prevShow);
  };

  const handleAddressChange = (
    index: number,
    e: FormControlChangeEvent
  ) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].value = e.target.value;
    setAddresses(updatedAddresses);
  };

  const handleLocate = () => {
    let addressString = '';
    for (const address of addresses) {
      if (address.value !== '') {
        addressString += `${address.value} `;
      }
    }
    setAddress(addressString.trim());
  };

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          const mapOptions = {
            center: { lat, lng },
            zoom: 18,
          };
          setMapOptions(mapOptions);
        }
      });
    }
  }, [isLoaded, address]);

  const isAnyAddressEmpty = addresses.filter(address => address.value === ''
    && address.label !== 'Address 2').length > 0;

  return (
    <>
      <Button variant="primary" onClick={toggleModal} className="pantry-header-btn">
        Locate Pantries Nearby
      </Button>
      <Modal show={show} size="xl" className="modal" onHide={toggleModal}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Find Pantries Nearby </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="row">
            <div className="col-6 map-col">
              {isLoaded &&
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={map.zoom}
                  center={map.center}>
                  <MarkerF position={map.center} />
                </GoogleMap>
              }
            </div>
            <div className="col-6">
              <Form>
                {addresses.map(({ label, placeholder, type, value }, index) => (
                  <AddressForm
                    key={index}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    value={value}
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
          <Button variant="primary" onClick={handleLocate} disabled={isAnyAddressEmpty}>
            Locate
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  );
};

export default LocationModal;
