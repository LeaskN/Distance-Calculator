import { useState } from 'react';
import './App.css';
import AirDistanceCalculator from './components/AirDistanceCalculator';
import SimpleMap from './components/SimpleMap';
import Header from './components/Header';

function App() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData({...childdata});
  }

  return (
    <>
      <Header />
      <SimpleMap data={data} />
      <AirDistanceCalculator childToParent={childToParent}/>
    </>
  )
}

export default App;