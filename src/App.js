import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./components/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
