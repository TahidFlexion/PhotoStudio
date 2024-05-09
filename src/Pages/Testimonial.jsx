import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Testimonial() {
  const [small, SetSmall] = useState(false)

  return (
    <div className="text-light testimonial">
      <div>
        <img src="Line.png" alt="" className='img-fluid w-100' />
      </div>
      <div className="videos-heading float-end me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-5 me-0 p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-2 p-1">
        <h1>Testimonials</h1>
      </div>
      <div>
        <img src="Line.png" alt="" className='img-fluid w-100' />
      </div>

      <div className='container-fluid'>
        <div className="row">
          <div className='text-head'>
            <div className="col-xxl-4">
              <div className='text-end'>
                <img src="Line.png" alt="" className='img-fluid w-50' />
              </div>
              <h1 className=''>WHAT MY CLIENT SAY</h1>
              <img src="Line.png" alt="" className='img-fluid w-75' />
            </div>
            <div className="left"></div>
            <div className="container">
              <div className="wrapper py-5 my-5 d-flex justify-content-center align-content-center ">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    }
                  }}
                >



<SwiperSlide className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-1 '>  <div className="  border-0 " id='first'>
                    <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 box p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-4 ">
                      <img src="test-img1.png" alt="" className='img-fluid' />
                      <p className='py-xxl-3 py-xl-3 py-lg-2 py-md-1 py-sm-3 py-1'> "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                      <h6>Dinesh Singh</h6>
                      <p className='fs-6'>Mumbai, India</p>
                    </div>
                  </div>
                  </SwiperSlide>


                 <SwiperSlide className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-1 '>  <div className="  border-0 " id='first'>
                    <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 box p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-4 ">
                      <img src="test-img1.png" alt="" className='img-fluid' />
                      <p className='py-xxl-3 py-xl-3 py-lg-2 py-md-1 py-sm-3 py-1'> "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                      <h6>Dinesh Singh</h6>
                      <p className='fs-6'>Mumbai, India</p>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-1 '>  <div className="  border-0 " id='first'>
                    <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 box p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-4 ">
                      <img src="test-img1.png" alt="" className='img-fluid' />
                      <p className='py-xxl-3 py-xl-3 py-lg-2 py-md-1 py-sm-3 py-1'> "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                      <h6>Dinesh Singh</h6>
                      <p className='fs-6'>Mumbai, India</p>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-1 '>  <div className="  border-0 " id='first'>
                    <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 box p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-4 ">
                      <img src="test-img1.png" alt="" className='img-fluid' />
                      <p className='py-xxl-3 py-xl-3 py-lg-2 py-md-1 py-sm-3 py-1'> "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                      <h6>Dinesh Singh</h6>
                      <p className='fs-6'>Mumbai, India</p>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-1 '>  <div className="  border-0 " id='first'>
                    <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 box p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-4 ">
                      <img src="test-img1.png" alt="" className='img-fluid' />
                      <p className='py-xxl-3 py-xl-3 py-lg-2 py-md-1 py-sm-3 py-1'> "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                      <h6>Dinesh Singh</h6>
                      <p className='fs-6'>Mumbai, India</p>
                    </div>
                  </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
