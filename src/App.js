import './App.css';
import Header from './components/Header.js'
import StartPage from './components/StartPage.js'
import PhotographyPage from './components/PhotographyPage.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
      <StartPage />
      </div>
      <div>
      <PhotographyPage />
      </div>
    </div>
  );
}

export default App;
