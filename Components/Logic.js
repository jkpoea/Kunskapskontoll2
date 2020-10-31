import React from "react";
import { useState } from "react";

const weapons = ["rock", "paper", "scissors"];

const handLogic = () => {
  const [playerHand, setPlayerHand] = useState("");
  const [cpuHand, setCpuHand] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [result, setResult] = useState("");

  const givePoints = (p1, p2) => {
    if (p1 === p2) {
      setResult("Draw!");
    } else if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock") ||
      (p1 === "scissors" && p2 === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      setResult("You score!");
    } else {
      setCpuScore(cpuScore + 1);
      setResult("Cpu scores!");
    }
  };

  const chooseHand = (hand) => {
    const playerPick = hand;
    const cpuPick = weapons[Math.floor(Math.random() * 3)];
    setPlayerHand(playerPick);
    setCpuHand(cpuPick);
    givePoints(playerPick, cpuPick);
  };

  return { playerHand, cpuHand, playerScore, cpuScore, result, chooseHand };
};
export default handLogic;
