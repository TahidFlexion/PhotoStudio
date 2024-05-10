// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {


//   return (

//     <nav className="navbar navbar-expand-lg bg-secondary p-xxl-3 fixed-top shadow">
//     <div className="container-fluid">
//         <a className="navbar-brand ms-xxl-4" to="">
//           <img src="logo.png" alt="Company Logo" className='img-fluid ' />
//         </a>
//       <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse offcanvas-body" id="navbarSupportedContent" >
//         <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-white d-flex justify-content-center align-items-center gap-2 ">
//         <li className="nav-item">
//             <Link className="nav" to="/">HOME</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav " aria-current="page" to="about">ABOUT US</Link>
//           </li>
//           <li className="nav-item" >
//             <Link className="nav " to="videos">VIDEOS</Link>
//           </li>
       
//           <li className="nav-item">
//             <Link className="nav " to="/portfolio">PORTFOLIO</Link>
//           </li>
//           <li className="nav-item" >
//             <Link className="nav " to="/services">SERVICES</Link>
//           </li>
//           <li className="nav-item" >
//             <Link className="nav " to="testimonial">TESTIMONIAL</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav  " to="contactUs">CONTACT US</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
  

//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary p-xxl-3 fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand ms-xxl-4" href="#">
            <img src="logo.png" alt="Company Logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler bg-warning d-lg-none"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-lg-center" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-white d-flex justify-content-center align-items-center gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/photo-studio/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/photo-studio/about">ABOUT US</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/photo-studio/videos">VIDEOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photo-studio/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/photo-studio/services">SERVICES</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/photo-studio/testimonial">TESTIMONIAL</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photo-studio/contactUs">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`offcanvas bg-dark  text-light offcanvas-start ${showNavbar ? 'show' : ''}`} tabIndex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
        <div className="offcanvas-header">
        <a className="navbar-brand ms-xxl-4" href="#">
            <img src="logo.png" alt="Company Logo" className="img-fluid" />
          </a>
          <button type="button" className="btn-close bg-light p-3 text-light" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleNavbar}></button>
        </div>
        <hr />
        <div className="offcanvas-body ">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-white d-flex justify-content-center align-items-center gap-4">
            <li className="nav-item ">
              <Link className="nav-link" to="/" onClick={toggleNavbar}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="about" onClick={toggleNavbar}>ABOUT US</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="videos" onClick={toggleNavbar}>VIDEOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={toggleNavbar}>PORTFOLIO</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/services" onClick={toggleNavbar}>SERVICES</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/testimonial" onClick={toggleNavbar}>TESTIMONIAL</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs" onClick={toggleNavbar}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
