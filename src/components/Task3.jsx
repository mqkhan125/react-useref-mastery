import { useRef } from "react";

const Task3 = () => {
  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current.focus();

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default Task3