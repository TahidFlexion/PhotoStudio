import React, { useRef, useState } from 'react';

function VideoHome({ handlehide }) {
    const [play, setPlay] = useState(true);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setPlay(!play);
    };

    const handleVideoPlay = () => {
        setPlay(true);
    };

    const handleVideoPause = () => {
        setPlay(false);
    };

    return (
        <>
            <div className="Videohome">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white small-bg" style={{ backgroundColor: "rgba(48, 47, 48, 0.959)" }}>
                        <div className='image'>
                                <video ref={videoRef} onPlay={handleVideoPlay} onPause={handleVideoPause} autoPlay={play} className='img-fluid rounded-4 shadow'>
                                    <source src="video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='img-outer'>
                                    <a href="#" onClick={togglePlay}>
                                        {play ? <img src="pause.png" alt="" className='playbt'/> : <img src="play.png" alt=""  className='playbt'/>}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pt-xxl-5 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-4 pt-sm-3 pt-3 d-flex justify-content-center text-white videohome-content" style={{ backgroundColor: "rgb(103, 103, 103)" }}>
                            <div className='d-flex flex-column gap-xxl-2 fw-light ms-xxl-5 ms-xl-5 ms-lg-5  ms-md-5 ms-sm-2 ms-2'>
                                <h1 className='fs-1 '>Crafting videos with <br /> passion and purpose.</h1>
                                <p className='py-xxl-5 py-xxl-2 py-xl-2 py-lg-4 py-md-4 py-sm-2 py-2 col-xxl-7'>Uses light to create photographs that are about size and quality than and white photography</p>
                                <div className='py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-2'>
                                    <label htmlFor="b1">
                                        <input type="checkbox" checked="true" className='me-2' id='b1' />
                                        Good Photography Can Do
                                    </label>
                                </div>
                                <div className='py-xxl-2 py-xl-2 py-lg-3 py-md-2 py-sm-2 py-2'>
                                    <label htmlFor="b2">
                                        <input type="checkbox" checked="true" className='me-2 ' id='b2'  />
                                        Personalize Your Looks
                                    </label>
                                </div>
                                <div className='py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-2'>
                                    <label htmlFor="b3">
                                        <input type="checkbox" checked="true" className='me-2 ' id='b3' />
                                        The Joy Is In The Detail
                                    </label>
                                </div>
                                <div className="btn-changer col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-5 col-6 py-xxl-4 py-xl-2 py-lg-4 py-md-3 py-sm-2 py-2">
                                    <div className="icon-changer">
                                        <input type="switcher" placeholder='Sedulous a Shot' onClick={handlehide} className='form-control p-xxl-3 p-xl-3  p-lg-3  p-md-3  p-sm-2 p-1 rounded-5 rounded-5 ' />
                                        <div className="bt">
                                            <div className="camera-icon p-xxl-2 p-xl-1  p-lg-2  p-md-1  p-sm-1 p-0 rounded-5" onClick={handlehide}>
                                                <img src="video.png" alt="" className='img-fluid ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='fs-5 fw-normal py-xxl-4 py-xl-3 py-lg-4 py-md-2 py-sm-2 py-2' style={{ color: "rgba(255, 159, 14, 0.856)" }}>Our Client</h2>
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
                   
                </div>
                
            </div>
        </>
    )
}

export default VideoHome;
