import React, { useRef, useState,useEffect } from 'react'

function Videos() {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isHovered) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
        return (
        <>
            <div className="text-light" style={{ background: " rgb(103, 103, 103)" }}>
                <div>
                    <img src="Line.png" alt="" className='img-fluid w-100' />
                </div>
                <div className="videos-heading float-end me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-5 me-0 p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-2 p-1">
                    <h1>Videos</h1>
                </div>
                <div className='pb-4'>
                    <img src="Line.png" alt="" className='img-fluid w-100' />
                </div>
            </div>

            <div className="videos text-light">
                <div className="container">
                    <div className="row py-xxl-5 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-5 ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12 text-white small-bg py-xxl-5 py-xl-5 py-lg-5 py-md-5 py-sm-2 py-2 " >
                        <div className='image' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <video ref={videoRef} controls={false} muted className='img-fluid'>
                        <source src="videobgv.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                        </div>
                        <div className="col-xl-6 col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12 py-xxl-5 py-xl-0 py-lg-0 py-md-4 py-sm-2 py-2 ">
                            <div className="videos-content col-xxl-9 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ps-lg-5 ps-md-5 ps-sm-2 ps-2 ">
                                <div className='videos-text'>
                                    <h1 className='py-xxl-5 py-xl-5 py-lg-5 py-md-4 py-sm-3 py-1'>Videos</h1>
                                    <img src="right-angle.png" alt="" className='img-fluid' />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus. Pellent consectetur adipiscing elit.</p>
                                <div className='py-xxl-4 py-xl-4 py-lg-3 py-md-3 py-sm-3 py-2 bt btn-shine'>
                                    <button className='btn btn-light rounded-5 w-50 p-3 btn bt btn-shine-effect  '>See more</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Videos