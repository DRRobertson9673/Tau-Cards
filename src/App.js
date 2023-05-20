import './App.css';
import Grid from './components/grid'
import Dashboard from './components/dashboard'
import rotate from './images/rotate.svg';

function App() {
  return (
    <div className="content">
      <div className="mainContent">
        <Grid />
        <Dashboard />
      <div className="screen hidden"></div>
      </div>
      <img className="rotate" src={rotate} alt="" />
    </div>
  );
}

export default App;
