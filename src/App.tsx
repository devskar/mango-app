import React from 'react';
import SpendingPlanView from './components/SpendingPlanView';
import './styles/index.css';
import './styles/positioning.css';

function App() {
  return (
    <div id='display'>
      Mango
      <SpendingPlanView />
      {/* <HouseholdView /> */}
    </div>
  );
}

export default App;
