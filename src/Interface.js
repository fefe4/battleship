import React, { useState } from "react";
import playerFactory from "./Player";
import './gameboard.css'

const Interface = () => {
  const humanPlayer = playerFactory("human");
  const computerPlayer = playerFactory("computer")
  const [gameboard1, setGameboard1] = useState(humanPlayer.gameboard.gameBoard);
  const [gameboard2, setGameboard2] = useState(computerPlayer.gameboard.gameBoard);
  const [humanGameboard, setHumanGameboard] = useState ([])
  const [computerGameboard, setComputerGameboard] = useState ([])
  
  humanPlayer.gameboard.addCruiser();
  computerPlayer.gameboard.addCruiser();

  function playerTurn (e) { 
    let coordinate = e.target.id
    computerPlayer.gameboard.receiveAttack(coordinate)
    console.log (coordinate)
    if (gameboard2[coordinate]=== "ship") {
      setComputerGameboard(computerGameboard.splice(coordinate, 1, <div className="hit" id={coordinate}></div>))
      console.log (computerGameboard)
    }
    else {  
      setComputerGameboard(computerGameboard.splice(coordinate, 1, <div  className="water" id={coordinate}></div>))
    }
  }

    for (let i in gameboard1) {
      if (gameboard1[i] === "water") {
        humanGameboard.push(<div key={i} id={i} className="water"></div>);
      }
      else if (gameboard1[i] === "ship") {
        humanGameboard.push(<div key={i} id={i} className="ship"></div>)
      }
    }
    
    for (let i in gameboard2) {
      if (gameboard2[i] === "water") {
        computerGameboard.push(<div key={i} onClick={playerTurn} id={i}></div>)
      }
      else if (gameboard2[i] === "ship") {
        computerGameboard.push(<div key={i} onClick={playerTurn} id={i}></div>)
      }
      else if (gameboard2[i] === "hit") {
        computerGameboard.push(<div id={i} className="hit"></div>)
      }
    }
  

  

  return (
    <div className="game">
      <div className="gameboard">
        {/* {humanGameboard} */}
        {/* {gameboard1.map((square) => {
            if (square === "water") {
              return <div key={gameboard1.indexOf(this)} id={gameboard1.indexOf(this)} className="water"></div>;
            }
            else if (square === "ship") {
              return <div  key={gameboard1.indexOf(square)} id={gameboard1.indexOf(square)} className="ship"></div>
            }
        })} */}
      </div>
      <div className="gameboard">
        {computerGameboard}
      {/* {gameboard2.map((square) => {
            if (square === "water") {
              return <div onClick={playerTurn} id={gameboard2.indexOf(square) }></div>;
            }
            else if (square === "ship") {
              return <div id={gameboard2.indexOf(square)}></div>
            }
            else if (square === "hit") {
              return <div id={gameboard1.indexOf(square)} className="hit"></div>
            }
        })} */}
      </div>
    </div>
  );
};

export default Interface