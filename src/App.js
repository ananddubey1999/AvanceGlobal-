import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import MainHome from './Pages/MainHome';
import ContactsUs from './Pages/ContactsUs';
import ReadMore from './Pages/ReadMore';
import Infrastructures from './Pages/Infrastructures';
import Product from './Pages/Product';
import AvanceSolution from './Pages/AvanceSolution';
import Trainings from './Pages/Trainings';
import DiscoverAvance from './Pages/DiscoverAvance';
import ERP_Solution from './Pages/ERP_Solution';
import GetFreeQuotes from './Pages/GetFreeQuotes';
import Webdevelopments from './Pages/Webdevelopments';
import CMS from './Pages/CMS';
import RealStates from './Pages/RealStates';
import CalculateCosts from './Pages/CalculateCosts';
import Chatbot from './Pages/Chatbot';
import Restaurant from './Pages/Restaurant';
import MobileApps from './Pages/MobileApps';
import TestingProjects from './Pages/TestingProjects';
import Porfolio from './Pages/Porfolio';
function App() {
  return (
    <Router>
      {/* <div className="App/"> */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/contact" element={<ContactsUs />} />
          <Route path="/learn-more" element={<ReadMore/>} />
          <Route path="/Infrastructure" element={<Infrastructures />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AvanceSolution" element={<AvanceSolution/>} />
          <Route path="/Trainings" element={<Trainings/>} />
          <Route path="/DiscoverAvance" element={<DiscoverAvance/>} />
          <Route path="/ERPSolution" element={<ERP_Solution/>} />
          <Route path="/GetFreeQuote" element={<GetFreeQuotes/>} />
          <Route path="/Webdevelopment" element={<Webdevelopments/>} />
          <Route path="/CMScost" element={<CMS/>} />
          <Route path="/RealStates" element={<RealStates/>} />
          <Route path="/CalculateCosts" element={<CalculateCosts/>} />
          <Route path="/Chatbot" element={<Chatbot/>} />
          <Route path="/Restaurant" element={<Restaurant/>} />
          <Route path="/MobileApps" element={<MobileApps/>} />
          <Route path="/TestingProjects" element={<TestingProjects/>} />
          <Route path="/Porfolio" element={<Porfolio/>} />
          {/* Define more routes as needed */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
