const { default: gameboardFactory } = require("./GameboardFactory");
const playerFactory = require("./Player");

describe("test Human Player", () => {
  let humanPlayer = playerFactory("human");
  test ('humanPlay', () => {
    expect(humanPlayer.humanPlay(0)).toBe(4)
  })
  test.only("can Player Attack?", () => {
    humanPlayer.gameboard.addCruiser()
    humanPlayer.humanPlay(0);
    humanPlayer.humanPlay(1);
    humanPlayer.humanPlay(2);
    humanPlayer.humanPlay(3);
    humanPlayer.humanPlay(4);
    
    expect(humanPlayer.gameboard.areShipsSunk()).toBe(true);
  });
});
