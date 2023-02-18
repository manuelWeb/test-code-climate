import logo from './logo.svg';
import './App.css';
import { data } from './Object'
import { getIdBestsellCollection } from './helper/cmsHelper'

function App() {
  console.log('data?', data, 'filter data', getIdBestsellCollection(data));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a>
      </header>
    </div>
  );
}

export default App;
