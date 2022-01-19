import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';


function App() {
  return (
    <div>
      <Header/>
       <List/>
       <Map/> 
       <Map />
       <PlaceDetails/>
    </div>
  );
}

export default App;
