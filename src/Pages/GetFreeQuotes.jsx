import React from 'react'
import GetFreeQuote from '../GetFree/GetFrees/GetFreeQuote';
import Analytics from '../GetFree/Analytic/Analytics';
import Navbar from '../Componants/Navbar/Navbar';
import Footer from '../Componants/footer/footer';
function GetFreeQuotes() {
  return (
    <div>

        <Navbar/>
      <GetFreeQuote/>
      <Analytics/>
      <Footer/>
    </div>
  )
}

export default GetFreeQuotes
