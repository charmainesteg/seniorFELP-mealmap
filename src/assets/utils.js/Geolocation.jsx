const getGeolocation = async (address, i) => {
  let home = {};
  const pantries = {};
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`
    );
    const jsonData = await response.json();
    if (jsonData && jsonData.results.length > 0) {
      const { lat, lng } = jsonData.results[0].geometry.location;
      if (i === 'home') {
        Object.assign(home, { lat: lat, lng: lng });
      } else {
        Object.assign(pantries, { lat: lat, lng: lng });
      }
      return { home, pantries };
    }
  } catch (e) {
    console.log(e.message);
    return null;
  }
};
export default getGeolocation;

// import axios from 'axios';

// const getClosestLocations = async (homeLat, homeLng, coordinates, radius, count) => {
//   try {
//     const destinations = coordinates.map(({ lat, lng }) => `${lat},${lng}`);

//     const distanceMatrixResponse = await fetch('https://maps.googleapis.com/maps/api/distancematrix/json', {
//       params: {
//         origins: `${homeLat},${homeLng}`,
//         destinations: destinations.join('|'),
//         key: 'YOUR_API_KEY', // Replace with your actual Google Maps API key
//       },
//     });

//     const elements = distanceMatrixResponse.data.rows[0].elements;

//     // Merge distance information with coordinates
//     const coordinatesWithDistances = coordinates.map((coordinate, index) => ({
//       ...coordinate,
//       distance: elements[index].distance.value,
//     }));

//     // Sort coordinates based on distance
//     coordinatesWithDistances.sort((a, b) => a.distance - b.distance);

//     // Retrieve the desired number of closest locations
//     const closestLocations = coordinatesWithDistances.slice(0, count);

//     console.log('Closest locations:', closestLocations);
//     return closestLocations;
//   } catch (error) {
//     console.error('Error fetching closest locations:', error);
//     return null;
//   }
// };

// export default getClosestLocations;

// what we need to get to use DestinationMetrix
// const homeLocation = { lat: 37.7749, lng: -122.4194 }; // Example home location
// const destinations = [
//   { lat: 37.7833, lng: -122.4167 }, // Example destination 1
//   { lat: 37.7966, lng: -122.398 }, // Example destination 2
//   // Add more destinations as needed
// ];

// export const MapComponent = withGoogleMap(({ homeLocation, destinations }) => {
//   const handleDistanceMatrix = (response, status) => {
//     if (status === 'OK') {
//       const rows = response.rows;

//       // Process the distance matrix response using a Promise
//       const processDistanceMatrix = () => {
//         return new Promise((resolve, reject) => {
//           // Perform your desired operations on the distance matrix response
//           // For example, calculate the distances between locations
//           const distances = rows[0].elements.map(
//             (element) => element.distance.value
//           );

//           // Resolve the promise with the calculated distances
//           resolve(distances);
//         });
//       };

//       // Use the Promise to access the calculated distances
//       processDistanceMatrix().then((distances) => {
//         console.log('Distances:', distances);
//         // Continue with further operations using the distances
//       });
//     }
//   };
// });

//   return (
//     <GoogleMap
//       defaultCenter={homeLocation}
//       defaultZoom={12}>
//       {destinations.map((destination, index) => (
//         <Marker
//           key={index}
//           position={destination}
//         />
//       ))}
//       <DistanceMatrixService
//         origins={[homeLocation]}
//         destinations={destinations}
//         travelMode='DRIVING'
//         onDistanceMatrix={handleDistanceMatrix}
//       />
//     </GoogleMap>
//   );
// });
