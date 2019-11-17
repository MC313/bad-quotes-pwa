import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstallPrompt from './components/InstallPrompt';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <InstallPrompt>
        <Quote />
      </InstallPrompt>
    </div>
  );
}

export default App;
