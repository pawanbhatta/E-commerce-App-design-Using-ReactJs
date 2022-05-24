import React from 'react'
import { Categories, Navbar, Products, Slider } from '../../components'
import NewsLetter from '../../components/Newsletter/NewsLetter'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
    </div>
  )
}

export default Home