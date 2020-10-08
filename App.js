import React, { useState, useEffect } from "react";
const hands = ["rock", "paper", "scissors"];

function App() {
  const [playerHand, setPlayerHand] = useState("");
  const [cpuHand, setCpuHand] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [roundWinner, setRoundWinner] = useState("");
  const [matchWinner, setMatchWinner] = useState("");
  const [rounds, setRounds] = useState(0);

  const inputRef = React.createRef();

  const setLimit = (e) => {
    e.preventDefault();
    const inputLimit = inputRef.current.value;
    setRounds(inputLimit);
    console.log(typeof rounds);
  };
  const selectingHand = (hand) => {
    const handPlayer = hand;
    const handCPU = hands[Math.floor(Math.random() * 3)];
    setPlayerHand(handPlayer);
    setCpuHand(handCPU);
    setRoundWinner(findWinner(handPlayer, handCPU));
    setMatchWinner(setPoint(playerScore, cpuScore, rounds));
  };

  const findWinner = (player1, player2) => {
    if (player1 === player2) {
      return "DRAW";
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      return "YOU SCORE!";
    } else {
      setCpuScore(cpuScore + 1);
      return "CPU SCORE!";
    }
  };

  const setPoint = (p1Score, p2Score, round) => {
    round = Number(round);
    if (p1Score === round) {
      return "YOU WIN";
    } else if (p2Score === round) {
      return "YOU LOSE";
    } else {
      return "THE GAME CONTINUES...";
    }
  };

  return (
    <div className="App">
      <form>
        <input ref={inputRef} />
        <button onClick={setLimit}>Set limit</button>
      </form>
      <h2>Score limit: {rounds} </h2>
      <h1>You: {playerHand}</h1>
      <h1>Rival: {cpuHand}</h1>
      <button onClick={() => selectingHand("rock")}>rock</button>
      <button onClick={() => selectingHand("paper")}>paper</button>
      <button onClick={() => selectingHand("scissors")}>scissors</button>
      <h1>Round result: {roundWinner}</h1>
      <h2>Your score: {playerScore}</h2>
      <h2>Rival score: {cpuScore}</h2>
      <h1>Game results: {matchWinner}</h1>
    </div>
  );
}
export default App;