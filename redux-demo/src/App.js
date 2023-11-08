import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <div>
        <Button/>
      </div>
      <p>
        <Display/>
      </p>
    </div>
  );
}

export default App;
