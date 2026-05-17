import React from 'react';

export default function TrainCard({ train, onSelect }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '20px', margin: '15px 0', borderRadius: '12px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Потяг {train.number}</h3>
        <span style={{ background: '#0056b3', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Пасажирський</span>
      </div>
      <p><strong>Маршрут:</strong> {train.from} — {train.to}</p>
      <p><strong>Відправлення:</strong> {new Date(train.departure).toLocaleString('uk-UA')}</p>
      <p><strong>Час у дорозі:</strong> {train.duration}</p>
      <button onClick={() => onSelect(train.id)} style={{ padding: '10px 16px', backgroundColor: '#ffc107', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
        Вибрати місця
      </button>
    </div>
  );
}