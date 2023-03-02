import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//my app function
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          {/* <Routes></Routes> */}
          <h1>Our Hanawilo Resource Library Project</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
