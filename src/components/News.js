import React from 'react'

const News = () => {
  return (
      <div>
          <div>
              <h2 className='text-5xl text-center mt-20 '>
                  <span className='border-t-2 border-t-black border-b-2 border-b-black'>News</span>
              </h2>
              <div className='grid grid-cols-3 mx-[100px] gap-9 my-20 '>
                  <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                      <figure><img src="https://www.ngofederation.org/uploads/images/IMG_22042023-12-08-04-19-50.jpeg" alt="Shoes" /></figure>
                      <div className="card-body">
                          <h2 className="card-title">News!!!</h2>
                          <p>Dialogue on Preventing Violence Against Women and Girls: Policies, Investment and Role of CSOs</p>
                          <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn More</button>
                          </div>
                      </div>
                  </div>
                  <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                      <figure><img src="https://www.ngofederation.org/uploads/images/DSC083852023-11-25-07-40-50.jpeg" alt="Shoes" /></figure>
                      <div className="card-body">
                          <h2 className="card-title">News!!!</h2>
                          <p>Nepal Shows Progress in Global Hunger Index, Ranks 69! in 2023.</p>
                          <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn More</button>
                          </div>
                      </div>
                  </div>
                  <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                      <figure><img src="https://www.ngofederation.org/uploads/images/Capture2023-10-31-01-36-58.jpeg" alt="Shoes" className='h-[254px]' /></figure>
                      <div className="card-body">
                          <h2 className="card-title">News!!!</h2>
                          <p>About World Social Forum 2024 – Nepal</p>
                          <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn More</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default News