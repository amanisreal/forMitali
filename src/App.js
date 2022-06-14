import logo from './logo.svg';
import './App.css';
import Announcement from './Components/Announcement';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Trending from './Components/Trending';
import Merchandise from './Components/Merchandise';

function App() {
  return (
    <div className="App">
      <Announcement/>
      <NavBar/>
      <Banner/>
      <Trending/>
      <Merchandise/>
    </div>
  );
}

export default App;
