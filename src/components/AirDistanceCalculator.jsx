import React, { useEffect, useState } from "react";

const AirDistanceCalculator = ({childToParent}) => {
  const initLat1 = 40.7128
  const initLong1 = -74.0060
  const initLat2 = 27.7743
  const initLong2 = -82.6389

  const [latA, setLatA] = useState(initLat1);
  const [latB, setLatB] = useState(initLat2);
  const [longA, setLongA] = useState(initLong1);
  const [longB, setLongB] = useState(initLong2);
  const [distance, setDistance] = useState('');

  useEffect(() => {
    console.log('sending data')
    childToParent({latA, latB, longA, longB})
  }, [distance])


  var degreeToRad = (deg) => {
    return deg * (Math.PI/180)
  }

  var calculateDistance = () => {
    // convert longitude and latitude from degrees to radians
    var longRadA = degreeToRad(longA)
    var longRadB = degreeToRad(longB)
    var latRadA = degreeToRad(latA)
    var latRadB = degreeToRad(latB)

    // haversine formula- from https://www.geeksforgeeks.org/program-distance-two-points-earth/
    var dLong = longRadB - longRadA;
    var dLat = latRadB - latRadA;

    var a = Math.pow(Math.sin(dLat / 2), 2) 
            + Math.cos(latRadA) 
            * Math.cos(latRadB) 
            * Math.pow(Math.sin(dLong / 2), 2);
    
    var c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in km
    var R = 6371;
    // result 
    var calculatedDist = (c * R).toString()
    setDistance("Distance: " + Math.ceil(calculatedDist) + "km");
  }

  return (
    <div>
      <h1>Air Distance Calculator</h1>
      <div>
        <input
          type="number"
          id="latitudeA"
          placeholder="Point A Latitude"
          onChange={(event) => setLatA(Number(event.target.value))}
        />
        <input
          type="number"
          id="longitudeA"
          placeholder="Point A Longitude"
          onChange={(event) => setLongA(Number(event.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          id="latitudeB"
          placeholder="Point B Latitude"
          onChange={(event) => setLatB(Number(event.target.value))}
        />
        <input
          type="number"
          id="longitudeB"
          placeholder="Point B Longitude"
          onChange={(event) => setLongB(Number(event.target.value))}
        />
      </div>
      <button onClick={calculateDistance}>Calculate</button>
      <h3>{ distance }</h3>
    </div>
  );
};

export default AirDistanceCalculator;
