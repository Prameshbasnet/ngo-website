import React from 'react'

const Carousel = () => {
  return (
      <div>
          <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://www.ngofederation.org/uploads/images/IMG_00472023-04-12-10-50-20.jpeg" className="w-full h-[700px]" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://www.ngofederation.org/uploads/images/DSC083852023-11-27-02-40-38.jpeg" className="w-full h-[700px]" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                  <img src="https://www.ngofederation.org/uploads/images/IMG_10392023-04-12-11-01-59.jpeg" className="w-full h-[700px]" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                  <img src="https://www.ngofederation.org/uploads/images/DSC081442023-11-27-02-39-00.jpeg" className="w-full h-[700px]" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Carousel