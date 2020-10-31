import React, { useState } from "react";
import handLogic from "./Logic";
import setAmount from "./rounds";

const TestRender = () => {
  const {
    playerHand,
    cpuHand,
    playerScore,
    cpuScore,
    result,
    chooseHand
  } = handLogic();
  const { rounds, inputRef, setLimit, restart } = setAmount();

  if (rounds <= 0) {
    return (
      <div>
        <form>
          <input ref={inputRef} />
          <button onClick={setLimit}>Set limit</button>
        </form>
        <h2>Enter a score limit. Number has to be positive number!</h2>
      </div>
    );
  } else if (rounds > 0) {
    return (
      <div>
        <h1>Score limit: {rounds}</h1>
        <h1>You: {playerHand}</h1>
        <h1>Rival: {cpuHand}</h1>
        <button onClick={() => chooseHand("rock")}>rock</button>
        <button onClick={() => chooseHand("paper")}>paper</button>
        <button onClick={() => chooseHand("scissors")}>scissors</button>
        <h1>Your Score: {playerScore} </h1>
        <h1>Cpu score: {cpuScore}</h1>
        <h1>Result: {result} </h1>
        <button onClick={() => restart()}>Restart</button>
      </div>
    );
  }
};
export default TestRender;