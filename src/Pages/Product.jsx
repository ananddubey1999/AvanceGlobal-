import React from 'react'
import Products from '../Product/Products/Products'
import Insure from '../Product/Insure/Insure'
import Invest from '../Product/Invest/Invest'
import AvanceTest from '../Product/AvanceTest/AvanceTest'
import AvanceEdu from '../Product/AvanceEdu/AvanceEdu'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/footer/footer'

function Product() {
  return (
    <>
    <Navbar/>
      <Products/>
      <Insure/>  
      <Invest/>
      <AvanceTest/>
      <AvanceEdu/>
      <Footer/>
    </>
  )
}

export default Product
