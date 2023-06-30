import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';

export default function SimpleMap({ data }) {
  if (!data) return <div>Loading...</div>;
  return <Map data={data} />;
}

function Map({ data }) {
  const [liveData, setData] = useState(data);
  
  useEffect(() => {
    console.log('dataUpdated: ', data)
    setData(data);
    console.log(typeof data.latA)
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
        </GoogleMapReact>
      </div>
    </div>
  );
};