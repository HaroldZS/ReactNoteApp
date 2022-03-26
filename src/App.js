import logo from './logo.svg';
import './App.css';
import Grilla from './Components/Grilla'


function App() {
  return (
    <div className="App">
        <Grilla />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;