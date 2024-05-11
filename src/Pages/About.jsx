import React from 'react'

function About() {
    return (
        <div className="About text-light  ">
            <div className="heading text-end ">
                <img src="Line.png" alt="" className='img-fluid w-100' />
                <h1 className='p-xxl-4 p-xl-4 p-xlg-4 p-md-3 p-sm-2 p-1 me-xxl-5 me-xxl-5 me-xl-5 me-lg-5 me-md-5  me-sm-4 me-2'>About</h1>
                <img src="Line.png" alt="" className='img-fluid w-100' />
            </div>
            <div className="container py-5" >
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5 col-12">
                        <div className="About-img py-xxl-4 py-xl-4 py-xlg-4 py-md-4 py-sm-4 py-2">
                            <img src="About-1.png" alt="" className='img-fluid img1 rounded-4' />
                                <img src="About-2.png" alt="" className='img-fluid img2 rounded-4' />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7 col-12 " >
                        <div className="container">
                        <div className="row">
                            <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="About-content ">
                                <div className="float-end">
                            <div className='text-end'>
                            <img src="Line.png" alt="" className='img-fluid w-50' />
                            </div>
                            </div>
                            <h1 className='p-xxl-4 p-xl-4 p-xlg-4 p-md-3 p-sm-1 p-1 text-uppercase '>I'm Amelia</h1>
                            <img src="Line.png" alt="" className='img-fluid w-50 pb-5' />
                            <div className='py-xxl-1 py-xl-1 py-xlg-1 py-md-1 py-sm-1 py-1'>
                                <p className='pb-3' >Photography is more than just a job. For many years this has been a constant need, this is the language in which I express my inner world.
                                </p>
                                <p>I started filming as a teenager, driven by a love of nostalgia and a desire to create something that would last.</p>
                            </div>
                            <div className='py-xxl-5 py-xl-5 py-xlg-4 py-md-4 py-sm-4 py-2 wrapper-img'>
                                <a href="">
                                <img src="About-learn.png" alt="" className='img-fluid'/>
                                {/* <div className='hover-btn'>
                                <img src="btn.png" alt="" className='img-fluid'/>
                                </div> */}
                                </a>
                            </div>
                        </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About