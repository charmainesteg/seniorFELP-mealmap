import { useState, useEffect, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LocationModal.css";
import pantryData from "../assets/data/pantryData";
import AddressForm, { FormControlChangeEvent } from "./addressForm/AddressForm";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const LocationModal = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  const [map, setMapOptions] = useState({
    center: {
      lat: 33.7488,
      lng: -84.3877,
    },
    zoom: 10,
  });

  const mapStyles = {
    height: "500px",
    width: "550px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: apiKey!,
  });

  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState([
    { label: "Address 1", type: "text", placeholder: "Address 1", value: "" },
    { label: "Address 2", type: "text", placeholder: "Address 2", value: "" },
    { label: "City", type: "text", placeholder: "City", value: "" },
    { label: "State", type: "select", placeholder: "State", value: "" },
    { label: "Zip Code", type: "text", placeholder: "Zip Code", value: "" },
  ]);

  const [nearestPantry, setNearestPantry] = useState({title: "", index: 0, coordinates: {latitude: 0, longitude: 0}})

  const handleAddressChange = (index: number, e: FormControlChangeEvent) => {
    const updateAddresses = [...addresses];
    updateAddresses[index].value = e.target.value;
    setAddresses(updateAddresses);

    let addressString = "";
    for (const address of addresses) {
      if (address.value.trim() !== "") {
        addressString += address.value + ",";
      }
    }
    setAddress(addressString);
  };

  const handleLocate = async () => {
    const userAddress = address;
    const pantryCoordinates: {
      title: string;
      index: number;
      coordinates: { latitude: number; longitude: number };
    }[] = [];

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          userAddress
        )}&key=${apiKey}`
      );
      const userGeocodeData = await response.json();

      if (userGeocodeData.status === "OK") {
        const location = userGeocodeData.results[0].geometry.location;
        const userCoordinates = {
          latitude: location.lat,
          longitude: location.lng,
        };
        console.log("Address:", address, userCoordinates);

        await Promise.all(
          pantryData.map(async (pantry) => {
            const pantryAddress = pantry.location;

            const pantryGeocodeResponse = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                pantryAddress
              )}&key=${apiKey}`
            );
            const pantryGeocodeData = await pantryGeocodeResponse.json();

            if (pantryGeocodeData.status === "OK") {
              const pantryLocation =
                pantryGeocodeData.results[0].geometry.location;
              const pantryCoordinate = {
                title: pantry.title,
                index: pantry.id,
                coordinates: {
                  latitude: pantryLocation.lat,
                  longitude: pantryLocation.lng,
                },
              };
              pantryCoordinates.push(pantryCoordinate);
            } else {
              console.error(
                `Geocoding error for pantry "${pantry.title}":`,
                pantryGeocodeData.status
              );
              return null;
            }
          })
        );
        console.log("Pantry coordinates: ", pantryCoordinates);

        const origins: google.maps.LatLngLiteral = {
          lat: userCoordinates.latitude,
          lng: userCoordinates.longitude,
        };
        const destinationArray: google.maps.LatLngLiteral[] = [];

        pantryCoordinates.forEach((pantry) => {
          const latLngLiteral: google.maps.LatLngLiteral = {
            lat: pantry.coordinates.latitude,
            lng: pantry.coordinates.longitude,
          };
          destinationArray.push(latLngLiteral);
        });

        const service = new google.maps.DistanceMatrixService();

        const request: google.maps.DistanceMatrixRequest = {
          origins: [origins],
          destinations: destinationArray,
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
        };

        service.getDistanceMatrix(request, (response, status) => {
          if (response && status === google.maps.DistanceMatrixStatus.OK) {
            const elements = response.rows[0].elements;
            console.log(elements)

            let nearestPantryIndex = -1;
            let minDistance = Number.MAX_VALUE;

            elements.forEach((element, index) => {
              const distance = element.distance.value;
              if (distance < minDistance) {
                minDistance = distance;
                nearestPantryIndex = index;
              } 
            });
            if (nearestPantryIndex !== -1) {
              const nearestPantry = pantryCoordinates[nearestPantryIndex];
              setNearestPantry(nearestPantry)
              console.log(
                "Nearest Pantry: ",
                nearestPantry.title,
                nearestPantry.coordinates
              );
            } else {
              console.log("No nearest pantry found");
            }
          } else {
            console.error("Distance Matrix API error: ", status);
          }
        });
      } else {
        console.error("Geocoding error:", userGeocodeData.status);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  //change map location
  useEffect(() => {
    if (isLoaded) {
        if (nearestPantry.title !=="") {
          const lat = nearestPantry.coordinates.latitude
          const lng = nearestPantry.coordinates.longitude
          const mapOptions = {
            center: { lat, lng },
            zoom: 18,
          };
          setMapOptions(mapOptions);
        };
    }
  }, [isLoaded, nearestPantry]);



  const isEmpty = useMemo(() => {
    return addresses.filter((address) => address.value === "" && address.label !== "Address 2").length > 0;
  }, [addresses])

  return (
    <>
      <Button
        variant="primary"
        onClick={toggleModal}
        className="pantry-header-btn"
      >
        Locate Pantries Nearby
      </Button>

      <Modal show={show} onHide={toggleModal} size="xl" className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Find Pantries Nearby </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="row">
            <div className="col-6 map-col">
            {nearestPantry ? (
                <div>
                    <h2>NearestPantry: </h2>
                    <a href={`/pantries/${nearestPantry.index}`}>{nearestPantry.title}</a>
                </div>
              ): (
                <p>No Nearest pantry found</p>
              )}
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={map.zoom}
                  center={map.center}
                >
                  <MarkerF position={map.center} />
                </GoogleMap>
              )}
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
          <Button variant="primary" onClick={handleLocate} disabled={isEmpty}>
            Locate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LocationModal;
