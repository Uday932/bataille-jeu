const types = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
const formes = ['♥️', '♦️', '♣️', '♠️'];

const generateRandomCard = () => {
  return {
    UnType: types[Math.floor(Math.random() * types.length)],
    UneForme: formes[Math.floor(Math.random() * formes.length)],
  };
};

const playTurn = (playerCards, computerCards, battleStack = []) => {

  if (playerCards === 0 || computerCards === 0) {
    return {
      playerCard: null,
      computerCard: null,
      newPlayerCards: playerCards,
      newComputerCards: computerCards,
      result: playerCards === 0 ? 'Vous avez perdu la partie !' : 'Vous avez gagné la partie !',
      gameOver: true,
    };
  }


  const playerCard = generateRandomCard();
  const computerCard = generateRandomCard();


  battleStack.push(playerCard, computerCard);

  const playerIndex = types.indexOf(playerCard.UnType);
  const computerIndex = types.indexOf(computerCard.UnType);


  if (playerIndex === computerIndex) {
    
    if (playerCards > 1 && computerCards > 1) {
      return {
        playerCard: null,
        computerCard: null,
        newPlayerCards: playerCards - 1,
        newComputerCards: computerCards - 1,
        result: 'Bataille ! Les joueurs ajoutent une carte face cachée et continuent.',
        gameOver: false,
        battleStack,
        continueBattle: true, 
      };
    }


    return {
      playerCard: null,
      computerCard: null,
      newPlayerCards: 0,
      newComputerCards: 0,
      result: playerCards <= 1
        ? 'Vous n’avez plus assez de cartes pour continuer la bataille. Vous avez perdu.'
        : 'L’ordinateur n’a plus assez de cartes pour continuer la bataille. Vous avez gagné.',
      gameOver: true,
    };
  }


  if (playerIndex > computerIndex) {
    const wonCards = battleStack.length;
    return {
      playerCard,
      computerCard,
      newPlayerCards: playerCards + wonCards - 1,
      newComputerCards: computerCards - 1,
      result: `Vous gagnez la bataille et récupérez ${wonCards} cartes !`,
      gameOver: false,
    };
  }

 
  if (playerIndex < computerIndex) {
    const wonCards = battleStack.length;
    return {
      playerCard,
      computerCard,
      newPlayerCards: playerCards - 1,
      newComputerCards: computerCards + wonCards - 1,
      result: `L'ordinateur gagne la bataille et récupère ${wonCards} cartes !`,
      gameOver: false,
    };
  }
};

export { playTurn };
