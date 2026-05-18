import React, { useState } from 'react';

export default function BookingForm({ onSubmit, selectedSeatsCount }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Обов'язково заповніть усі поля пасажира!");
      return;
    }
    if (selectedSeatsCount === 0) {
      setError('Виберіть хоча б одне місце на схемі.');
      return;
    }
    setError('');
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px', marginTop: '20px' }}>
      <h4>Дані пасажира для оформлення:</h4>
      <input type="text" placeholder="Прізвище та Ім'я" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input type="tel" placeholder="Номер телефону" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input type="email" placeholder="Електронна пошта" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      {error && <p style={{ color: '#e74c3c', margin: '0', fontSize: '14px' }}>{error}</p>}
      <button type="submit" style={{ padding: '12px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
        Підтвердити бронювання квитків ({selectedSeatsCount})
      </button>
    </form>
  );
}