import './App.css';
import AirDistanceCalculator from './components/AirDistanceCalculator';
import SimpleMap from './components/GoogleMap';

function App() {
  return (
    <>
      <SimpleMap/>
      <AirDistanceCalculator />
    </>
  )
}

export default App;