import gameboardFactory from "./GameboardFactory";
const playerFactory = (player) => {
  const gameboard = gameboardFactory(player);
  const humanHits = [];
  const computerHits = [];
  const humanPlay = (x) => {
    gameboard.receiveAttack(x);
  };
  gameboard.addCruiser();
  const computerPlay = () => {
    let x = Math.floor(Math.random() * 64);
    while (computerHits.indexOf(x) !== undefined) {
      let x = Math.floor(Math.random() * 64);
    }
    computerHits.push(x);
    gameboard.receiveAttack(x);
  };
  return { gameboard, humanPlay, computerPlay };
};

export default playerFactory;
