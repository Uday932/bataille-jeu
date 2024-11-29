import React, { useState } from 'react';
import Card from './components/card';
import './App.css';

const App = () => {
  const [playerCard, setPlayerCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [result, setResult] = useState('');

  const types = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
  const formes = ['♥️', '♦️', '♣️', '♠️'];

  const drawCard = () => {
    const playerRandomCard = {
      UnType: types[Math.floor(Math.random() * types.length)],  
      UneForme: formes[Math.floor(Math.random() * formes.length)],  
    };
    const computerRandomCard = {
      UnType: types[Math.floor(Math.random() * types.length)],
      UneForme: formes[Math.floor(Math.random() * formes.length)],
    };

    setPlayerCard(playerRandomCard);
    setComputerCard(computerRandomCard);
    WinnerOfGame(playerRandomCard, computerRandomCard);
  };

  const WinnerOfGame = (player, computer) => {
    const playerRankIndex = types.indexOf(player.UnType);  
    const computerRankIndex = types.indexOf(computer.UnType); 

    if (playerRankIndex > computerRankIndex) {
      setResult('Vous avez gagné !');
    } else if (playerRankIndex < computerRankIndex) {
      setResult('L\'ordinateur a gagné !');
    } else {
      setResult('C\'est une égalité !');
    }
  };

  return (
    <div className="app">
      <h1>Bataille</h1>
      <div className="game-container">
        <div className="player-area">
          <h2>Votre carte</h2>
          {playerCard && <Card UnType={playerCard.UnType} UneForme={playerCard.UneForme} />}
        </div>
        <div className="computer-area">
          <h2>Carte de l'Ordinateur</h2>
          {computerCard && <Card UnType={computerCard.UnType} UneForme={computerCard.UneForme} />}
        </div>
      </div>
      <button onClick={drawCard}>Tirer une carte</button>
      {result && <h2>{result}</h2>}
    </div>
  );
};

export default App;
