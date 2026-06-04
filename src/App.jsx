import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";

function App() {
  return (
    <div className="app-container">
      {/* Box 1 */}
      <div className="task-card">
        <h2>Task 1: Color Toggle</h2>
        <Task1 />
      </div>

      {/* Box 2 */}
      <div className="task-card">
        <h2>Task 2: Stopwatch</h2>
        <Task2 />
      </div>

      {/* Box 3 */}
      <div className="task-card">
        <h2>Task 3: Input Focus</h2>
        <Task3 />
      </div>

      {/* Box 4 */}
      <div className="task-card">
        <h2>Task 4: Prev Counter</h2>
        <Task4 />
      </div>

      {/* Box 5 */}
      <div className="task-card">
        <h2>Task 5: Video Play</h2>
        <Task5 />
      </div>
    </div>
  );
}

export default App;
