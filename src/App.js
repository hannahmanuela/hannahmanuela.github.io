import './App.css';
import React from 'react';
import LandingView from './components/LandingView'
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import LoadingPage from './components/LoadingPage'
import Header from './components/Header.js'
import FAQ from './components/FAQ.js'
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) {
      return <LoadingPage/>;
    }
    
    return (
      <div className="App">
        <LandingView/>
        <Header/>
        <About/>
        <Experience/>
        <Education/>
        <FAQ/>
        <Footer/>
    </div>
    ); 
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 750));
}

export default App;