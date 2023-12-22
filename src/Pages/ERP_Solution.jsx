import React from 'react'
import ERP from '../ERP-Solution/ERP/ERP'
import Navision from '../ERP-Solution/MS Navision/Navision'
import Globaltech from '../ERP-Solution/Globaltech/Globaltech'
import Mission from '../ERP-Solution/Our-Mission/Mission'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/footer/footer'
function ERP_Solution() {
  return (
    <div>
        <Navbar/>
      <ERP/>
      <Navision/>
      <Globaltech/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default ERP_Solution
