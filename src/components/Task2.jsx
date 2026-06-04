import { useState, useRef } from "react";

const Task2 = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {

    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h1>StopWatch : {time} Seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Task2;
