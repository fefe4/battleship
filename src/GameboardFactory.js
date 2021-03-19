import shipFactory from "./shipFactory";

// //If orientation === 0 then the ship is vertical oriented,
// //else horizontally
// function getCoords(x) {
//   let orientation = Math.Round(Math.random());
//   let startingPosition = Math.floor(Math.random() * 64);
//   let horizontalPosition = startingPosition % 8;
//   let verticalPosition = Math.floor(startingPosition / 8);
//   while (orientation === 1 && horizontalPosition > 8 - x) {
//     startingPosition = Math.floor(Math.random() * 64);
//     horizontalPosition = startingPosition % 8;
//   }
//   let coordinates = [];
//   if (orientation === 1) {
//     for (let i = 0; i < x; i++) {
//       coordinates.push(startingPosition + i);
//     }
//   }
//   while (orientation === 0 && verticalPosition <= 8 - x) {
//     startingPosition = Math.floor(Math.random() * 64);
//     verticalPosition = Math.floor(startingPosition / 8);
//   }
//   return coordinates;
// }

const gameboardFactory = (player) => {
  const size = 64;
  let gameBoard = [];
  for (let i = 0; i < size; i++) {
    gameBoard.push("water");
  }

  let cruiserCoordinates = [0, 1, 2, 3, 4];
  const cruiser = shipFactory("cruiser", 5, cruiserCoordinates);

  const addCruiser = () => {
    gameBoard.splice(
      cruiserCoordinates[0],
      cruiserCoordinates.length,
      "ship",
      "ship",
      "ship",
      "ship",
      "ship"
    );
  };

  const receiveAttack = (x) => {
    if (gameBoard[x] === "ship") {
      return cruiser.hit(x);
    }
  };

  const areShipsSunk = () => {
    if (cruiser.isSunk() === true) {
      return true;
    } else {
      return false;
    }
  };
  return {
    player,
    gameBoard,
    cruiser,
    receiveAttack,
    areShipsSunk,
    addCruiser,
  };
};

export default gameboardFactory;
