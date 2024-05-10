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
      <Route path="/photo-studio/" element={   <div style={{backgroundColor:"rgb(48, 47, 48)"}}>
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
      <Route path="/photo-studio/about" element={ <About />} />
      <Route path="/photo-studio/videos" element={ <Videos />} />
      <Route path="/photo-studio/portfolio" element={ <Portfolio />} />
      <Route path="/photo-studio/services" element={ <Services />} />
      <Route path="/photo-studio/testimonial" element={ <Testimonial />} />
      <Route path="/photo-studio/contactus" element={ <ContactUs />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
