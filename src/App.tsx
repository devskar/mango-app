import React from 'react';
import HouseholdView from './components/HouseholdView';
import SpendingPlanView from './components/SpendingPlanView';
import './styles/index.css';

function App() {
  return (
    <div>
      Mango
      <SpendingPlanView />
      <HouseholdView />
    </div>
  );
}

export default App;
