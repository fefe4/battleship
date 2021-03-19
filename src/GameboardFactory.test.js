const gameboardFactory = require("./GameboardFactory");
describe("does Gameboard work?", () => {
  let Player1 = gameboardFactory("player1");
  Player1.addCruiser();

  test ( "receive attack works", () => {
    
    expect(Player1.receiveAttack(1)).toBe(4)
  })
  test.only("does receive attack work?", () => {
    Player1.receiveAttack(0);
    Player1.receiveAttack(1);
    Player1.receiveAttack(2);
    Player1.receiveAttack(3);
    Player1.receiveAttack(4);
    expect(Player1.areShipsSunk()).toBe(true);
  });
});

