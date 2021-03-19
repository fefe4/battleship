const shipFactory = require("./shipFactory");
test("is the ship created?", () => {
  expect(shipFactory("cruiser", 5, [1, 2, 3, 4, 5])).toMatchObject({
    name: "cruiser",
    lenght: 5,
  });
});

describe("does ship work?", () => {
  let cruiser = shipFactory("cruiser", 5, [0, 1, 2, 3, 4]);
  let battleship = shipFactory("battleship", 4, [8, 16, 24, 32]);
  test("1", () => {
    expect(shipFactory("cruiser2", 5, [0]).hit(0)).toBe(4);
    battleship.hit(8);
    battleship.hit(16);
    battleship.hit(24);
    battleship.hit(32);
    expect(battleship.isSunk()).toBe(true);
  });
});

// describe("does IsSunk work?", () => {
//   let testPatrol = shipFactory("Patrol", 1);
//   let testCruiser = shipFactory("cruiser", 5);
//   test("is Patrol sunk after 1 hit?", () => {
//     testPatrol.hit(9);
//     expect(testPatrol.isSunk()).toBe(true);
//   });
//   test("is Cruiser sunk after 5 hits", () => {
//     testCruiser.hit(9);
//     testCruiser.hit(9);
//     testCruiser.hit(9);
//     testCruiser.hit(9);
//     testCruiser.hit(9);
//     expect(testCruiser.isSunk()).toBe(true);
//   });
// });
