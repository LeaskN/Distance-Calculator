import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';

const Marker = () => {
  return <>
    <div className="pin"></div>
  </>
}

function Map({ data }) {
  const [liveData, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div className='map-container'>
      <div className='map'>
        <GoogleMapReact
          key={new Date().getTime()}
          style={{ width: '300px', height: '300px', position: 'relative' }}
          // bootstrapURLKeys={{ key: import.meta.env.VITE_API_URL }}
          bootstrapURLKeys={{ key: process?.env.REACT_APP_API_KEY }}
          defaultCenter={[40.7128, -74.0060]}
          center={[liveData.latA, liveData.longA]}
          defaultZoom={11}
        >
          <Marker lat={liveData.latA} lng={liveData.longA} />
        </GoogleMapReact>
      </div>

      <div className='map'>
        <GoogleMapReact
          key={new Date().getTime() + 123}
          style={{ width: '300px', height: '300px', position: 'relative' }}
          // bootstrapURLKeys={{ key: import.meta.env.VITE_API_URL }}
          bootstrapURLKeys={{ key: process?.env.REACT_APP_API_KEY }}
          defaultCenter={[27.7743, -82.6389]}
          center={[liveData.latB, liveData.longB]}
          defaultZoom={11}
        >
          <Marker lat={liveData.latB} lng={liveData.longB} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default function SimpleMap({ data }) {
  if (!data) return <div>Loading...</div>;
  return <Map data={data} />;
}