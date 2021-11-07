import ShareView from './components/ShareView';
import SpendingPlanView from './components/SpendingPlanView';
import './styles/index.css';
import './styles/positioning.css';

function App() {
  return (
    <div id='display'>
      <SpendingPlanView />
      <ShareView />
    </div>
  );
}

export default App;
