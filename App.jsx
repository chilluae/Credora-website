import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactForm from "./components/Contactform";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;