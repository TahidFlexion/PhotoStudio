import React, { useState } from 'react'

function Portfolio() {
  const [All, setAll] = useState(true)
  const [fashion, setFashion] = useState(false)
  const [studio, setStudio] = useState(false)
  const [portrait, setPortrait] = useState(false)

  const hanldeAll = () => {
    setAll(true)
    setFashion(false)
    setStudio(false)
    setPortrait(false)
  }
  const hanldeFashion = () => {
    setFashion(true)
    setAll(false)
    setStudio(false)
    setPortrait(false)
  }
  const hanldeStudio = () => {
    setStudio(true)
    setFashion(false)
    setAll(false)
    setPortrait(false)
  }
  const hanldePortrait = () => {
    setPortrait(true)
    setFashion(false)
    setAll(false)
    setStudio(false)
  }


  return (
    <div className="portfolio bg-secondary text-light"  >
      <div>
        <img src="Line.png" alt="" className='img-fluid w-100' />
      </div>
      <div className="portfolio-heading p-xxl-4 p-xl-4 p-lg-4 p-md-3 p-sm-2 p-1  ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-5  ms-sm-2  ms-1  ">
        <h1>Portfolio</h1>
      </div>
      <div>
        <img src="Line.png" alt="" className='img-fluid w-100' />
      </div>
      <div className="container	 ">
        <div class="row">
          <div className='d-flex justify-content-center py-xxl-5 py-xl-5 py-lg-5 py-md-3 py-sm-2 py-2 portfolio-content'>
            <div className="col-xxl-5 col-xl-6  col-lg-6 col-md-8 col-sm-9 col-11  ">
              <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus. Pellent </p>
            </div>
          </div>
          <div className="d-flex justify-content-center  gap-xxl-5 gap-xl-5 gap-lg-4 gap-md-3 gap-sm-2 gap-2 pb-4 bt">
            <p onClick={hanldeAll} className={All ? 'text-warning' : 'text-light'}>ALL</p>
            <p onClick={hanldeFashion} className={fashion ? 'text-warning' : ''}>FASHION</p>
            <p onClick={hanldeStudio} className={studio ? 'text-warning' : ''}> STUDIO</p>
            <p onClick={hanldePortrait} className={portrait ? 'text-warning' : ''}>PORTRAIT</p>
          </div>
          {All && (
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-3">
              <div className="d-flex justify-content-center gap-2">

                <div className="main">
                  <img src="portfolio-1.png" alt="Avatar" className="image-overlay" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0 rounded-0  '> view image</button>
                    </div>
                  </div>
                </div>


                <div className="main">
                  <img src="portfolio-2.png" alt="" className="img-fluid" />  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <img src="portfolio-3.png" alt="" className="img-fluid" />  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          )}

          {All && (
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-center gap-2">
                <div className="main">
                  <img src="portfolio-4.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <img src="portfolio-5.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>


                <div className="main">
                  <img src="portfolio-6.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>


                <div className="main">
                  <img src="portfolio-7.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          )}

          {All && (
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pt-3">
              <div className="d-flex justify-content-center gap-2">

                <div className="main">
                  <img src="portfolio-8.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <img src="portfolio-9.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0  btn-sm '> view image</button>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <img src="portfolio-10.png" alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {fashion && (
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pt-3">
              <div className="d-flex justify-content-center gap-4 pb-2">

                <div className="main">
                  <img src="portfolio-7.png" alt="" className="img-fluid pb-4" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>


                <div className="main">
                  <img src="portfolio-10.png" alt="" className="img-fluid " />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-4  ">

                <div className="main">
                  <img src="portfolio-6.png" alt="" className="img-fluid  pb-4" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <img src="portfolio-5.png" alt="" className="img-fluid mt-3" />
                  <div className="overlay">
                    <div className="text">
                      <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {studio && (
          <div className="col-xxl-12 col-6 ">
            <div className="d-flex justify-content-center gap-3">
              <div className="main">
                <img src="portfolio-4.png" alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                  </div>
                </div>
              </div>

              <div className="main">
                <img src="portfolio-2.png" alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {portrait && (
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pt-3">
            <div className="d-flex justify-content-center gap-4  pb-3">

              <div className="main">
                <img src="portfolio-1.png" alt="" className="img-fluid" />  <div className="overlay">
                  <div className="text">
                    <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                  </div>
                </div>
              </div>
              <div className="main">
                <img src="portfolio-3.png" alt="" className="img-fluid " />
                <div className="overlay">
                  <div className="text">
                    <button className='btn btn-outline-light border-2 rounded-0'> view image</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="d-flex justify-content-center">

              <div className="main">
                <img src="portfolio-9.png" alt="" className="img-fluid " /> <div className="overlay">
                  <div className="text">
                    <button className='btn btn-outline-light border-2 rounded-0 btn-sm'> view image</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Portfolio