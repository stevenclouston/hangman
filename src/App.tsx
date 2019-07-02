import React, { Component } from 'react';
import './assets/css/App.scss';
import StartPage from './components/startPage';
import GameHandler from './components/gameHandler';
import GameFinished from './components/gameFinished';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <StartPage />
          <GameHandler />
          <GameFinished />
        </header>
      </div>
    );
  }
}

export default App;
