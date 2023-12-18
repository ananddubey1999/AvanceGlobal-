import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import MainHome from './Pages/MainHome';
import ContactsUs from './Pages/ContactsUs';
import ReadMore from './Pages/ReadMore';
import GetFreeQuotes from './Get Free Quotes/GetFreeQuotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/contact" element={<ContactsUs />} />
          <Route path="/learn-more" element={<ReadMore/>} />
          <Route path="/get-free-quotes" element={<GetFreeQuotes />} />
          {/* Define more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
