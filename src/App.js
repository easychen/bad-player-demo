import React, { Component } from 'react';
import './App.css';
import Player from 'griffith'

class App extends Component {
  render() {
    const sources = {
      hd:{
        play_url: 'dog.f.mp4',
        bitrate:1522,
        duration:29,
        format:'mp4'
        
      }
    }
    return (
      <div className="App">
        <header className="App-header">
        <Player sources={sources} id="player" useMSE={true} />
        </header>
      </div>
    );
  }
}

export default App;
