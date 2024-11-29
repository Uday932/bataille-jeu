import React, { useState } from 'react';
import Card from './components/card';
import { playTurn } from './components/gameLogique';
import './App.css';

const App = () => {
  const [playerCard, setPlayerCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [playerCards, setPlayerCards] = useState(26);
  const [computerCards, setComputerCards] = useState(26);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false); 

  const handlePlayTurn = () => {

    if (gameOver) return;

    if (playerCards === 0 || computerCards === 0) {
      setGameOver(true);
      setResult(
        playerCards === 0
          ? 'La partie est terminée ! Vous avez perdu.'
          : 'La partie est terminée ! Vous avez gagné.'
      );
      return;
    }


    const turnResult = playTurn(playerCards, computerCards);

    setPlayerCard(turnResult.playerCard);
    setComputerCard(turnResult.computerCard);
    setPlayerCards(turnResult.newPlayerCards);
    setComputerCards(turnResult.newComputerCards);
    setResult(turnResult.result);

    // Vérifie à nouveau la fin après la mise à jour
    if (turnResult.newPlayerCards === 0 || turnResult.newComputerCards === 0) {
      setGameOver(true);
      setResult(
        turnResult.newPlayerCards === 0
          ? 'La partie est terminée ! Vous avez perdu.'
          : 'La partie est terminée ! Vous avez gagné.'
      );
    }
  };

  return (
    <div className="app">
      <h1>Jeu de Bataille</h1>
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
      <button onClick={handlePlayTurn} disabled={gameOver}>
        Jouer un tour
      </button>
      <div className="remaining-cards">
        <p>Vos cartes restantes : {playerCards}</p>
        <p>Cartes restantes de l'ordinateur : {computerCards}</p>
      </div>
      {result && <h2>{result}</h2>}
    </div>
  );
};

export default App;
