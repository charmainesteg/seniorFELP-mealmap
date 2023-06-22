import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import  "./LocationModal.css"
import pantryData from "../assets/data/pantryData";
import AddressForm from "./addressForm/AddressForm";

const LocationModal = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  }

  const apiKey = process.env.REACT_APP_API_KEY;

  const [addresses, setAddresses] = useState ([
    {label: "Address 1", type: "text", placeholder: "Address 1", value: ""},
    {label: "Address 2", type: "text", placeholder: "Address 2", value: ""},
    {label: "City", type: "text", placeholder: "City", value: ""},
    {label: "State", type: "text", placeholder: "State", value: ""},
    {label: "Zip Code", type: "text", placeholder: "Zip Code", value: ""},
  ])

  const handleAddressChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updateAddresses = [...addresses];
    updateAddresses[index].value = e.target.value;
    setAddresses(updateAddresses)
  };

const handleLocate = async () => {
    let addressString = "";
    for (const address of addresses){
        if (address != null) {
            addressString += (address.value + ",");
        }
    }
    console.log("Address:", addressString)
    const userAddress = addressString;

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(userAddress)}&key=${apiKey}`);
        const userGeocodeData = await response.json();

        if (userGeocodeData.status === 'OK') {
            const location = userGeocodeData.results[0].geometry.location;
            const userCoordinates = {
                latitude: location.lat,
                longitude: location.lng
            };
            console.log(userCoordinates)

        } else { 
            console.error('Geocoding error:', userGeocodeData.status)
        }
    } catch (error) {
        console.error('Geocoding error:', error)
    }

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
          <Button variant="primary" onClick={handleLocate}>
            Locate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LocationModal;
