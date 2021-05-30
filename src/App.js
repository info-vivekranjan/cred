import './App.css';
import Footer from './Careers/Components/Footer';
import Navbar from './Careers/Components/Navbar';
import Routes from './Careers/Routes/Routes';

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
