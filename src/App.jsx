import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Laurels from "./components/Laurels/Laurels";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Laurels />
      <Footer />
    </div>
  );
}

export default App;
