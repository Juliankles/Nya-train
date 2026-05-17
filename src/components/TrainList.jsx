import React, { useState } from 'react';
import TrainCard from './TrainCard';

export default function TrainList({ trains, onSelectTrain }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trains.filter(train => 
    train.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Куди їдемо? (Місто або номер потяга...)" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{ padding: '12px', width: '100%', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', marginBottom: '20px' }}
      />
      <div>
        {filteredTrains.length > 0 ? (
          filteredTrains.map(train => (
            <TrainCard key={train.id} train={train} onSelect={onSelectTrain} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#777' }}>Рейсів не знайдено.</p>
        )}
      </div>
    </div>
  );
}