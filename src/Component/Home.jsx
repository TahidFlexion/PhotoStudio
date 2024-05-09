import React from 'react';

function Home({ handleShow }) {
    return (
        <>
            <div className="home " >
                <div className="container-fluid" >
                    <div className="row ">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white small-bg" style={{ backgroundColor: " rgba(48, 47, 48, 0.959)" }}>
                            <div className='image  ' >
                                <img src="home.png" alt="" className='img-fluid rounded-4 shadow' />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pt-xxl-5 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-4 pt-sm-3 pt-3 d-flex justify-content-center text-white home-content" style={{ backgroundColor: "rgb(103, 103, 103)" }}>
                            <div className='d-flex flex-column gap-xxl-2 fw-light  ms-lg-5 ms-md-5  '>
                                <div>
                                    <h1 className='fs-1 tracking-in-contract-bck'>Photography <br /> is Joy</h1>
                                </div>

                                <p className='py-xxl-5 py-xxl-2 py-xl-2 py-lg-4 py-md-3 py-sm-2 py-2 col-xxl-7'>Uses light to create photographs that are about size and quality than and white photography</p>
                                <div className='py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-2 '>
                                    <label htmlFor="a1">
                                        <input type="checkbox" checked="true" className='me-2' id='a1' />
                                        Good Photography Can Do
                                    </label>
                                </div>
                                <div className='py-xxl-2 py-xl-2 py-lg-3 py-md-2 py-sm-2 py-2'>
                                    <label htmlFor="a2">
                                        <input type="checkbox" checked="true" className='me-2' id='a2' />
                                        Personalize Your Looks
                                    </label>
                                </div>
                                <div className='py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-2'>
                                    <label htmlFor="a3">
                                        <input type="checkbox" checked="true" className='me-2 ' id='a3' />
                                        The Joy Is In The Detail
                                    </label>
                                </div>

                                <div className="btn-changer col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-5 col-6 py-xxl-4 py-xl-2 py-lg-4 py-md-3 py-sm-2 py-2">
                                    <div className="icon-changer">
                                        <input type="switcher" placeholder='Sedulous a Shot' onClick={handleShow} className='form-control p-xxl-3 p-xl-3  p-lg-3  p-md-3  p-sm-2 p-1 rounded-5 rounded-5 ' />
                                        <div className="bt">
                                            <div className="camera-icon p-xxl-3 p-xl-3  p-lg-3  p-md-3  p-sm-2 p-1 rounded-5" onClick={handleShow} >
                                                <img src="camera-icon.png" alt="" className='img-fluid ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='fs-5 fw-normal py-xxl-4 py-xl-3 py-lg-4 py-md-2 py-sm-2 py-2' style={{ color: " rgba(255, 159, 14, 0.856)" }}>Our Client</h2>
                                <div className="our-client d-flex gap-3">
                                    <div className="our-content d-flex gap-2">
                                        <div className="client-icon">
                                            <img src="client-1.png" alt="" className='img-fluid ' />
                                        </div>
                                        <div className="client-sub">
                                            <p>logoipsum</p>
                                        </div>
                                    </div>
                                    <div className="our-content d-flex gap-2 pb-5">
                                        <div className="client-icon">
                                            <img src="client-2.png" alt="" className='img-fluid ' />
                                        </div>
                                        <div className="client-sub">
                                            <p>logoipsum</p>
                                        </div>
                                    </div>
                                    <div className="our-content d-flex gap-2">
                                        <div className="client-icon">
                                            <img src="client-3.png" alt="" className='img-fluid ' />
                                        </div>
                                        <div className="client-sub">
                                            <p>logoipsum</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div>
                    </div>

                </div>
            </div>
            <div>
            </div>
        </>
    );
}

export default Home;
