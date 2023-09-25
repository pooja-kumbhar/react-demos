
import React from "react";
import './App.css';

function App() {

const [start, setStart] = React.useState(false);
const [diceNumber, setDiceNumber] = React.useState(1);
const [playerOneScore, setplayerOneScore] = React.useState(0);
const [playerTwoScore, setplayerTwoScore] = React.useState(0);
const [player, setActivePlayer] = React.useState(1);
const [name,setCurrentPlayerName]=React.useState("Player 1");
const [gameId,setgameId]= React.useState("");

async function startGame()
{
  const res= await fetch("http://assessment.tabit-gmbh.de/start");
  const gameId= await res.text();
  console.log(gameId);
  setgameId(gameId);
  setStart(true);

  const playersResponse = await fetch('http://assessment.tabit-gmbh.de/players', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id": gameId,
      "numberOfPlayers": 2,
    }),
  })
  const players= await playersResponse.json();
  console.log(players);

}

async function fetchNextPlayer()
{
  const winnerResponse = await fetch('http://assessment.tabit-gmbh.de/next', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id": gameId,
      "player": name,
      "numberOfDice":diceNumber,
    }),
  })
  const winner= await winnerResponse.json();
  return  winner;
}

  return (  
  <>
  <Header/>
 { start ? (<div className="container">
 <div className="player player--0 player--active">
       <h2 className="name" id="name--0">Player 1</h2>
        <div className="current">
          <p className="current-label">Current-Position</p>
          <p className="current-score" id="current--0">{playerOneScore}</p>
        </div>
 </div>

 <div className="player player--1">
 <h2 className="name" id="name--1">Player 2</h2>
 <div className="current">
   <p className="current-label">Current-Position</p>
   <p className="current-score" id="current--1">{playerTwoScore}</p>
 </div>
</div>

<img src= {`dice-${diceNumber}.png`} alt="Playing dice" className="dice" />  
      <button className="btn btn--roll" onClick={rollDice}>🎲 Roll dice</button>  
</div>) :

<button className="btn" onClick={startGame}> Start the Game</button>}
  </>
  );

  function rollDice()
  {
    const dice= Math.trunc(Math.random()*6)+1;
    console.log(dice);
    setDiceNumber(dice);
    const data= fetchNextPlayer();
    console.log(data.nextPlayer[name]);
    setCurrentPlayerName(data.nextPlayer[name]);
    
      player ===1 ? (playerOneScore>=30 && alert("Player one is winner🥇")):setplayerOneScore(playerOneScore+dice);
      player ===2 ? ( playerTwoScore>=30 && alert("Player two is winner🥇")):setplayerTwoScore(playerTwoScore+dice);
  
     setActivePlayer(player===1 ? 2 : 1);
    
  }
}

function Header()
{return(<header className="header"> ---Board game simulation Alexandria---</header>
  )
}


export default App;