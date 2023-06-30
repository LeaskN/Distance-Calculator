import { useState } from 'react';
import './App.css';
import AirDistanceCalculator from './components/AirDistanceCalculator';
import SimpleMap from './components/SimpleMap';

function App() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData({...childdata});
  }

  return (
    <>
      <SimpleMap data={data} />
      {/* <SimpleMap data={data} /> */}
      <AirDistanceCalculator childToParent={childToParent}/>
    </>
  )
}

export default App;