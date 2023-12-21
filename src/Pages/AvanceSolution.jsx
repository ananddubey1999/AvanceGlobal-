import React from 'react'
import Solution from '../Solutions/Solution/Solution'
import SystemIntegrator from '../Solutions/Systems Integrator/SystemIntegrator'
import Custom from '../Solutions/Custom Software Development/Custom'
import Pmo from '../Solutions/PMO Outsourcing/Pmo'
import CallCenter from '../Solutions/Call Center Setup & Operations/CallCenter'
import Erp from '../Solutions/Customized ERP Solutions/Erp'
import Digital from '../Solutions/Digital Marketing/Digital'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/footer/footer'
function AvanceSolution() {
  return (
    <div>
        <Navbar/>
        <Solution/>
        <SystemIntegrator/>
        <Custom/>
        <Pmo/>
        <CallCenter/>
        <Erp/>
        <Digital/>
        <Footer/>
    </div>
  )
}

export default AvanceSolution
