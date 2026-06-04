import { useRef } from "react"


const Task1 = () => {
  const btnRef = useRef(null)

  const changeBGC = () => {
    if(btnRef.current.style.backgroundColor === 'red'){
      btnRef.current.style.backgroundColor = "";
    } else {
      btnRef.current.style.backgroundColor = "red";
    }
  }

  return (
       <div>
      <button ref={btnRef}>Button_01</button>

      <br />
      <br />

      <button onClick={changeBGC}>Change_bgc_btn-1</button>
    </div>
  )
}

export default Task1