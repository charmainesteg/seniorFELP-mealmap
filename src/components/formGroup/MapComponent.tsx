import { GoogleMap, Marker, DistanceMatrixService, MarkerF } from '@react-google-maps/api';

type MapComponentProps = {
  homeLocation?: google.maps.LatLngLiteral | undefined;
  destinations: google.maps.LatLngLiteral[];
  containerElement?: any;
  mapElement?: JSX.Element;
};

const MapComponent = (({ homeLocation, destinations, containerElement, mapElement }: MapComponentProps) => {
  const handleDistanceMatrix = (
    response: google.maps.DistanceMatrixResponse | null,
    status: google.maps.DistanceMatrixStatus) => {
    if (status === 'OK' && response) {
      const rows = response.rows;
      // Process the distance matrix response here
      for (const row of rows) {
        for (const element of row.elements) {
          const distance = element.distance?.text;
          const duration = element.duration?.text;
          // Process the distance and duration values as needed
          console.log(`Distance: ${distance}, Duration: ${duration}`);
        }
      }
    }
  };
  return (
    <GoogleMap
      center={homeLocation}
      zoom={12}
      mapContainerStyle={containerElement}>
      {destinations.map((destination, index) => (
        destination?.lat && destination?.lng ? (
          <Marker key={index} position={destination} />
        ) : null
      ))}
      <DistanceMatrixService
        options={{
          origins: homeLocation ? [homeLocation] : [],
          destinations: destinations,
          travelMode: 'DRIVING' as google.maps.TravelMode,
        }}
        callback={handleDistanceMatrix}
      />
    </GoogleMap>
  );
});
export default MapComponent;
