import './App.css';
import USMap from './USAMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='USAdiv'>
          <USMap />
        </div>


      </header>
    </div>
  );
}

export default App;
