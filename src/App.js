import './App.css';
import LandingView from './LandingView'
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
        <LandingView/>
        <About/>
        <Experience/>
        <Education/>
    </div>
  );
}

export default App;