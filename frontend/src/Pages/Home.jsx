import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import Policy from '../Components/Policy'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <Newsletter/>
    </div>
  )
}

export default Home