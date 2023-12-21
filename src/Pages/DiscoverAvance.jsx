import React from 'react'
import About from '../Discover Avance/About/About'
import OurMission from '../Discover Avance/Our Mission/OurMission'
import Counter from '../Componants/Counters/Counter'
import TrustedClients from '../Componants/TrustedClients/TrustedClients'
import Footer from '../Componants/footer/footer'
import Navbar from '../Componants/Navbar/Navbar'
function DiscoverAvance() {
  return (
    <div>
      <Navbar/>
      <About/>
      <OurMission/>
      <Counter/>
      <TrustedClients/>
      <Footer/>

    </div>
  )
}

export default DiscoverAvance
