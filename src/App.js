import React from 'react';
import './App.css'; 

const App = () => {

  return (
    <div className="app">
      <h1>Simple Bataille</h1>
      <div className="game-container">
        <div className="player-area">
          <h2>Votre carte</h2>
        </div>
        <div className="computer-area">
          <h2>Carte de l'Ordinateur</h2>
        </div>
      </div>
    </div>
  );
};

export default App;