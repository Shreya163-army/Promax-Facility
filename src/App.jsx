import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CompanyValues from "./components/CompanyValues/CompanyValues";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Leadership from "./components/Leadership/Leadership";
import MandarProfile from "./components/MandarProfile/MandarProfile";
import Gallery from "./components/Gallery/Gallery";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <CompanyValues />
      <Services />
      <WhyChooseUs />
      <Leadership />
      <MandarProfile />
      <Gallery />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;