import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="animate-section">
          <Home />
        </div>
        <div className="animate-section">
          <Services />
        </div>
        <div className="animate-section">
          <Skills />
        </div>
        <div className="animate-section">
          <Portfolio />
        </div>
        <div className="animate-section">
          <Resume />
        </div>
        <div className="animate-section">
          <ContactUs />
        </div>
        <hr style={{ color: "#f6f6f680" }} />
        <Footer />
      </div>
    </>
  );
}

export default App;
