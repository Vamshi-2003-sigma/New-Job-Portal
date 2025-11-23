import React from 'react'
import Navbar from '../componentes/Navbar'
import Hero from '../componentes/Hero'
import JobListing from '../componentes/JobListing'
import AppDownload from '../componentes/AppDownload'
import Footer from '../componentes/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}

export default Home