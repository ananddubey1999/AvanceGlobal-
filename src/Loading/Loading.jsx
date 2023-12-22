// Loading.js
import React from 'react';
import './Loading.css'; // You can create a separate CSS file for Loading component styles

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      {/* Optionally add a message */}
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
