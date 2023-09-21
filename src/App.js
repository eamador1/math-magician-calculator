import './App.css';
import Button from './components/Calculator';
import Screen from './components/Display';

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <Screen />
        <div className="line">
          <Button>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>÷</Button>
        </div>
        <div className="line">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
        </div>

        <div className="line">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6 </Button>
          <Button>-</Button>
        </div>
        <div className="line">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="line">
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
