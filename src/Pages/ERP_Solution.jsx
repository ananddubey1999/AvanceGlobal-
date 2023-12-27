import React from 'react'
import ERP from '../ERP-Solution/ERP/ERP'
import Navision from '../ERP-Solution/MS Navision/Navision'
import Globaltech from '../ERP-Solution/Globaltech/Globaltech'
import Mission from '../ERP-Solution/Our-Mission/Mission'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/footer/footer'
import GoToTop from './GoToTop';
import { ThemeProvider } from 'styled-components'; 
function ERP_Solution() {
    const theme = {
      colors: {
        heading: "rgb(24 24 29)",
        text: "rgb(24 24 29)",
        white: "#fff",
        black: " #212529",
        helper: "#8490ff",
        bg: "rgb(249 249 255)",
        footer_bg: "#0a1435",
        btn: "rgb(98 84 243)",
        border: "rgba(98, 84, 243, 0.5)",
        hr: "#ffffff",
        gradient:
          "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        shadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      media: { mobile: "768px", tab: "998px" },
    };
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <ERP/>
      <Navision/>
      <Globaltech/>
      <Mission/>
      <GoToTop/>
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default ERP_Solution
