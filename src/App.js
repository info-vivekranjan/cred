import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      {/* <div style={{border: '',height: '70vh'}}></div> */}
      <Footer />
    </div>
  );
}

export default App;
