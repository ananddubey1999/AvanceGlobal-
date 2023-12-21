import React from 'react'
import Training from '../Tarinings/Training/Training'
import OnDemand from '../Tarinings/OnDemand/OnDemand'
import Compliance from '../Tarinings/Compliance/Compliance'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/footer/footer'
import Analysis from '../Tarinings/Technical Analysis/Analysis'
function Trainings() {
  return (
    <div>
        <Navbar/>
      <Training/>
      <OnDemand/>
      <Compliance/>
      <Analysis/>
      <Footer/>
    </div>
  )
}

export default Trainings
