import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function AppContent() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home onSelectTrain={(id) => navigate(`/booking/${id}`)} />} />
      <Route path="/booking/:trainId" element={<Booking />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <AppContent />
      </div>
    </Router>
  );
}