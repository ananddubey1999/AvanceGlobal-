import React, { useState, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';
import Solution from '../Solutions/Solution/Solution';
import SystemIntegrator from '../Solutions/Systems Integrator/SystemIntegrator';
import Custom from '../Solutions/Custom Software Development/Custom';
import Pmo from '../Solutions/PMO Outsourcing/Pmo';
import CallCenter from '../Solutions/Call Center Setup & Operations/CallCenter';
import Erp from '../Solutions/Customized ERP Solutions/Erp';
import Digital from '../Solutions/Digital Marketing/Digital';
import Navbar from '../Componants/Navbar/Navbar';
import Footer from '../Componants/footer/footer';
import GoToTop from './GoToTop';
import { ThemeProvider } from 'styled-components';

function AvanceSolution() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for the loading effect (you can replace this with actual data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the duration as needed

    // Clean-up function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: '#fff',
      black: ' #212529',
      helper: '#8490ff',
      bg: 'rgb(249 249 255)',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the shadow overlay
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: { mobile: '768px', tab: '998px' },
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    zIndex: 900,
  };

  const spinnerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
    // Additional styling for the spinner
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {isLoading ? (
          // Display RotateLoader and overlay while loading
          <div className="loading-overlay" style={overlayStyle}>
            <div className="spinner" style={spinnerStyle}>
              {/* RotateLoader component */}
              <RotateLoader color={'#8490ff'} loading={isLoading} size={35} />
            </div>
          </div>
        ) : (
          // Display content once loading is finished
          <>
            <Solution />
            <SystemIntegrator />
            <Custom />
            <Pmo />
            <CallCenter />
            <Erp />
            <Digital />
            <GoToTop />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default AvanceSolution;
