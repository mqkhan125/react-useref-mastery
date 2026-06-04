import { useRef } from "react";

const Task5 = () => {
  const videoRef = useRef(null);

  return (
    <div>
      <video
        ref={videoRef}
        width="250"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <br />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()} className="stop-btn">
        Pause
      </button>
    </div>
  );
};

export default Task5;