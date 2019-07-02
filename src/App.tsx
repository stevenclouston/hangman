import React, { Component } from 'react';
import './assets/css/App.scss';
import StartPage from './components/startPage';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-body">
            <StartPage />
          </header>
        </div>
    );
  }
}

export default App;
