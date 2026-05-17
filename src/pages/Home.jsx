import React from 'react';
import TrainList from '../components/TrainList';
import { trainsData } from '../data/trains';

export default function Home({ onSelectTrain }) {
  return (
    <div>
      <h1 style={{ color: '#0056b3', textAlign: 'center' }}>Розклад та бронювання квитків Укрзалізниці</h1>
      <TrainList trains={trainsData} onSelectTrain={onSelectTrain} />
    </div>
  );
}