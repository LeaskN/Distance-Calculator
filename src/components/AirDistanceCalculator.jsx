import React, { useState } from "react";

const AirDistanceCalculator = () => {
  const [pointALatitude, setPointALatitude] = useState('');
  const [pointALongitude, setPointALongitude] = useState('');
  const [pointBLatitude, setPointBLatitude] = useState('');
  const [pointBLongitude, setPointBLongitude] = useState('');
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [distance, setDistance] = useState('');

  const calculateDistance = () => {
    // Get the longitude and latitude for each point
    const requestA = new Request(`https://api.opencagedata.com/geocode/v1/json?key=3d07425ad8bd4928944fcdb6457ffde6&q=${pointALatitude}%2C${pointALongitude}`);
    fetch(requestA)
    .then((response) => response.json())
    .then((data) => {
      const { lng, lat } = data.results[0].geometry;
      setPointA({ lng, lat });
    })
    .catch((error) => {
      console.log(error);
    });
    
    const requestB = new Request(`https://api.opencagedata.com/geocode/v1/json?key=3d07425ad8bd4928944fcdb6457ffde6&q=${pointBLatitude}%2C${pointBLongitude}`);
    fetch(requestB)
      .then((response) => response.json())
      .then((data) => {
        const { lng, lat } = data.results[0].geometry;
        setPointB({ lng, lat });
      })
      .catch((error) => {
        console.log(error);
      });

    // Calculate the distance between the two points
    const earthRadius = 6371; // In kilometers
    const dLat = (pointB.lat - pointA.lat) * Math.PI / 180;
    const dLon = (pointB.lng - pointA.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(pointA.lat * Math.PI / 180) * Math.cos(pointB.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    // Set the distance state
    setDistance(distance);
  };

  return (
    <div style={{ width: 300 }}>
      <h1>Air Distance Calculator</h1>
      <div>
        <input
          type="text"
          id="latitudeA"
          placeholder="Point A Latitude"
          style={{ width: 100 }}
          onChange={(event) => setPointALatitude(event.target.value)}
        />
        <input
          type="text"
          id="longitudeA"
          placeholder="Point A Longitude"
          style={{ width: 100 }}
          onChange={(event) => setPointALongitude(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          id="latitudeB"
          placeholder="Point B Latitude"
          style={{ width: 100 }}
          onChange={(event) => setPointBLatitude(event.target.value)}
        />
        <input
          type="text"
          id="longitudeB"
          placeholder="Point B Longitude"
          style={{ width: 100 }}
          onChange={(event) => setPointBLongitude(event.target.value)}
        />
      </div>
      <button onClick={calculateDistance}>Calculate</button>
      <h3>Distance: { distance } km</h3>
    </div>
  );
};

export default AirDistanceCalculator;
