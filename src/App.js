import './App.css';
import React from 'react';
import LandingView from './components/LandingView'
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import LoadingPage from './components/LoadingPage'

// function App() {
//   return (
//     <div className="App">
//         <LoadingPage/>
//         <LandingView/>
//         <About/>
//         <Experience/>
//         <Education/>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return <LoadingPage/>; // render null when app is not ready
    }
    
    return (
      <div className="App">
        <LandingView/>
        <About/>
        <Experience/>
        <Education/>
    </div>
    ); 
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 750));
}

export default App;