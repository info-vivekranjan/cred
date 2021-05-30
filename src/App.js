import './App.css';
import Footer from './Components/Careers/Footer';
import Navbar from './Components/Careers/Navbar';
import Routes from './Routes/Routes';

function App() {
  // DOCUMENT TITLE
  document.title = "CRED Careers";

  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
