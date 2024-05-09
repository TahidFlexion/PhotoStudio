import React from 'react'

function Footer() {
  return (
   <footer className="py-5 ">
  <div className="container-fluid ">
    <div className="row">
      <div className=" col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12 ">
        <img src="logo.png" className="img-fluid mb-3" alt="Image" />
        <p className='pt-5 col-xxl-6 col-xl-6 col-lg-10 col-md-10 col-sm-12 col-12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor orci non neque volutpat gravida.</p>
      </div>
      <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12  footer-content">
        <h2>Get in touch</h2>
        <div className="d-flex">
        <div className="icon">
          <img src="map-icon.png" alt="Icon" />
        </div>
        <p><a href=""> 8819 Ohio St. South Gate, CA 90280</a></p>
        </div>
      <div className="col-md footer-content">
        <div className="d-flex">
        <div className="icon">
          <img src="msg-icon.png" alt="Icon" />
        </div>
        <p> <a href="">email@favor.com</a></p>
        </div>
      </div>
      <div className="col-md footer-content">
        <div className="d-flex">
        <div className="icon">
          <img src="phoe-icon.png" alt="Icon" />
        </div>
        <p> <a href="">(205) 555-0100</a> </p>
        </div>
      </div>
      </div>
      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12  footer-content">
        <h2>Service</h2>
        <p> <a href="">Photography</a></p>
        <p> <a href="">Videography</a></p>
        <p> <a href="">Photo Editor</a></p>

      </div>
      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12  footer-content">
        <h2>Company</h2>
        <p> <a href="">Sevices</a></p>
        <p> <a href="">Features</a></p>
        <p> <a href="">Our team</a></p>
        <p> <a href="">Portfolio</a></p>
        <p> <a href="">Blog</a></p>
      </div>
      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12  pt-5">
        <p className='pt-2'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer
