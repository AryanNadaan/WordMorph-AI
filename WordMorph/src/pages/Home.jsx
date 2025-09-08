import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import { GenerateBTN } from '../components/GenerateBTN'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBTN/>

        </div>
  )
}

export default Home