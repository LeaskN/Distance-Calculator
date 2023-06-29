import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 40.8759,
      lng: -73.5971
    },
    zoom: 11
  };


  return (
    // Important! Always set the container height explicitly
    <div id='map' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_API_URL }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}