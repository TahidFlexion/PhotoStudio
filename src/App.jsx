import { useState } from "react"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import VideoHome from "./Component/VideoHome"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Videos from "./Pages/Videos"
import Services from "./Pages/Services"
import Testimonial from "./Pages/Testimonial"
import ContactUs from "./Pages/ContactUs"
import Footer from "./Pages/Footer"
import { Routes ,Route} from "react-router-dom"

function App() {
  const [show , setShow]=useState(true)

  const handleShow=()=>{
    setShow(false)
  }
  const handlehide=()=>{
    setShow(!show)
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={   <div style={{backgroundColor:"rgb(48, 47, 48)"}}>
      {
        show ?
        <><Home handleShow={handleShow}/>
        <About />
        <Videos />
        <Portfolio />
        <Services />
        <Testimonial />
        <ContactUs/>
        </>:<VideoHome handlehide={handlehide}/>
      }
    </div>}/>
      <Route path="/about" element={ <About />} />
      <Route path="/videos" element={ <Videos />} />
      <Route path="/portfolio" element={ <Portfolio />} />
      <Route path="/services" element={ <Services />} />
      <Route path="/testimonial" element={ <Testimonial />} />
      <Route path="/contactus" element={ <ContactUs />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
