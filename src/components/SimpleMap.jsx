import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { MapPin } from 'react-feather';

export default function SimpleMap({ data }) {
  if (!data) return <div>Loading...</div>;
  return <Map data={data} />;
}

function Map({ data }) {
  const [liveData, setData] = useState(data);
  
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div className='map-container'>

      <div> Point B
        <GoogleMapReact 
          key={new Date().getTime()}
          style={{ width: '300px', height: '300px', position: 'relative' }}
          bootstrapURLKeys={{ key: import.meta.env.VITE_API_URL }}
          defaultCenter={[40.7128, -74.0060]}
          center={[liveData.latA, liveData.longA] }
          defaultZoom={10}
        >
          {/* <MapPin 
            lat={parseFloat(data.latA)}
            lng= {parseFloat(data.longB)}
            fill="red"
            style={{transform: 'translateZ(0) translate(-50%, -50%)', position: "absolute"}}
          /> */}
        </GoogleMapReact>
      </div>
      <div> Point B
        <GoogleMapReact
          key={new Date().getTime()+123}
          style={{ width: '300px', height: '300px', position: 'relative' }}
          bootstrapURLKeys={{ key: import.meta.env.VITE_API_URL }}
          defaultCenter={[27.7743, -82.6389]}
          center={[liveData.latB, liveData.longB]}
          defaultZoom={10}
        >
          {/* <MapPin 
            lat={parseFloat(data.latA)}
            lng= {parseFloat(data.longB)}
            fill="red"
            style={{transform: 'translateZ(0) translate(-50%, -50%)', position: "absolute"}}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};