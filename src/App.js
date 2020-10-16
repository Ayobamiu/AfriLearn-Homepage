import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import "./font_awesome/css/all.css";
import "./font_awesome/css/all.min.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
