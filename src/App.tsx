import React, { Component } from 'react';
import './assets/css/App.scss';
import Title from './components/title';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-body">
            <Title />
          </header>
        </div>
    );
  }
}

export default App;
