import { useState, useRef, useEffect } from "react";

const Task4 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // Render ke baad purani value save karega
  }, [count]);

  return (
    <div>
      <h3>
        Current: {count} | Previous: {prevCountRef.current}
      </h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task4