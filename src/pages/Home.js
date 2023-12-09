import React from 'react'
import Carousel from '../components/Carousel'
import WhoWeAre from '../components/WhoWeAre'
import Publication from '../components/Publication'
import News from '../components/News'


const Home = () => {
  return (
      <div>
          
          <Carousel />
          <WhoWeAre />
      <Publication />
      <News/>
    </div>
  )
}

export default Home