 import React from "react"
 import Navbar from "./components/Navbar"
 import Home from "./components/Home"
 import About from "./components/About"
 import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/skills"
 function App(){
    return (
      <>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Skills />
            <Contact />
          <Footer />
      </>
    );
 }
 export default App