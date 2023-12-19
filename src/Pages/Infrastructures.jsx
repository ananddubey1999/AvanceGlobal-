import React from 'react'
import Infrastructure from '../IT_Infrastructure/IT/Infrastructure'
import Hardwares from '../IT_Infrastructure/Hardware/Hardwares'
import Networkings from '../IT_Infrastructure/Networking/Networkings'
import DataCenter from '../IT_Infrastructure/Data_Center/DataCenter'
import Footer from '../Componants/footer/footer'
import Navbar from '../Componants/Navbar/Navbar'

function Infrastructures() {
  return (
    <>
        <Navbar/>
        <Infrastructure/>
        <Hardwares/>
        <Networkings/>
        <DataCenter/>
        <Footer/>
    </>
  )
}

export default Infrastructures
