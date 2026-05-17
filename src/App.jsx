import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

// Окремий компонент для контенту, щоб можна було використовувати useNavigate всередині Router
function AppContent() {
  const navigate = useNavigate();
  return (
    <Routes>
      {/* Головна сторінка зі списком потягів */}
      <Route path="/" element={<Home onSelectTrain={(id) => navigate(`/booking/${id}`)} />} />
      {/* Сторінка бронювання конкретного потяга */}
      <Route path="/booking/:trainId" element={<Booking />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <AppContent />
      </div>
    </Router>
  );
}