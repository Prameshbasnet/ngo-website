import React from 'react'

const Publication = () => {
  return (
      <div className='mx-[100px]'>
          <div>
              <h2 className='text-5xl text-center mt-7 '>
                  <span className='border-t-2 border-t-black border-b-2 border-b-black'>Publication</span>
                  
              </h2>
          </div>
          <div className='flex justify-between mt-12'>
              <div className='flex w-[900px] gap-6'>
                  <div>
                      <div className="card lg:card-side bg-base-100 shadow-xl h-[290px]">
                          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                          <div className="card-body">
                              <h2 className="card-title">Ethical AI</h2>
                              <p>Click the button to learn more</p>
                              <div className="card-actions justify-end">
                                  <button className="btn btn-primary">Learn More</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="card lg:card-side bg-base-100 shadow-xl h-[290px]">
                          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                          <div className="card-body">
                              <h2 className="card-title">Global Hunger Index Report 2023</h2>
                              <p>Click the button to learn more</p>
                              <div className="card-actions justify-end">
                                  <button className="btn btn-primary">Learn More</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              {/* //////////////// */}
              <div>
                  
                  <div role="tablist" className="tabs tabs-lifted">
                      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Press Release" />
                      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">No News</div>


                      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Latest Update" checked />
                      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">No latest Update</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Publication