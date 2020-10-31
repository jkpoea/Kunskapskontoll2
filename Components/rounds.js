import React, { useState } from "react";

const setAmount = () => {
  const [rounds, setRounds] = useState(0);
  const inputRef = React.createRef();

  const setLimit = (e) => {
    e.preventDefault();
    const inputLimit = inputRef.current.value;
    setRounds(inputLimit);
  };

  const restart = () => {
    window.location.reload(false);
  };

  return { rounds, setRounds, inputRef, setLimit, restart };
};
export default setAmount;