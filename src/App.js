import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import MainHome from './Pages/MainHome';
import ContactsUs from './Pages/ContactsUs';
import ReadMore from './Pages/ReadMore';
import GetFreeQuotes from './Get Free Quotes/GetFreeQuotes';
import Infrastructures from './Pages/Infrastructures';
import Product from './Pages/Product';
import AvanceSolution from './Pages/AvanceSolution';
import Trainings from './Pages/Trainings';
import DiscoverAvance from './Pages/DiscoverAvance';
import ERP_Solution from './Pages/ERP_Solution';
function App() {
  return (
    <Router>
      {/* <div className="App/"> */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/contact" element={<ContactsUs />} />
          <Route path="/learn-more" element={<ReadMore/>} />
          <Route path="/get-free-quotes" element={<GetFreeQuotes />} />
          <Route path="/Infrastructure" element={<Infrastructures />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AvanceSolution" element={<AvanceSolution/>} />
          <Route path="/Trainings" element={<Trainings/>} />
          <Route path="/DiscoverAvance" element={<DiscoverAvance/>} />
          <Route path="/ERPSolution" element={<ERP_Solution/>} />
          {/* Define more routes as needed */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
