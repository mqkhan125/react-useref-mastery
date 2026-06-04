# 🚀 React useRef Mastery Dashboard

A production-ready React dashboard showcasing 5 real-world use cases of the `useRef` hook. This project demonstrates how to manipulate the DOM, persist values across renders without triggering re-renders, manage web timers, and handle HTML5 media elements using a clean and responsive **CSS Grid** layout.

---

## 🛠️ Key Features (The 5 Tasks)

1. **Task 1: Color Toggle** – Direct DOM manipulation to toggle background colors without state re-renders.
2. **Task 2: Stopwatch** – Managing side-effects and safely storing/clearing interval IDs (`setInterval`).
3. **Task 3: Input Focus** – Programmatically focusing a text input field on button click.
4. **Task 4: Previous Counter** – Tracking and displaying the previous state value across renders.
5. **Task 5: Video Controller** – Controlling HTML5 video elements (Play/Pause) via custom UI buttons.

---

## 📸 Preview UI
<img width="1145" height="622" alt="download" src="https://github.com/user-attachments/assets/3a157d68-06d9-4db9-83ca-757713002d15" />


Below is the layout structure of the interactive dashboard:

```text
+-------------------------------------------------------------------+
|                     REACT USEREF DASHBOARD                        |
+----------------------------------+--------------------------------+
|  [ Task 1: Color Toggle ]        |  [ Task 2: Stopwatch ]         |
|  - Direct DOM Style Access       |  - Persistent Timer ID         |
+----------------------------------+--------------------------------+
|  [ Task 3: Input Focus ]         |  [ Task 4: Prev Counter ]      |
|  - Active Element Control        |  - Comparing Old vs New State  |
+----------------------------------+--------------------------------+
|  [ Task 5: Video Controller ]    |                                |
|  - HTML5 Media Play/Pause        |                                |
+----------------------------------+--------------------------------+
📝 Core Concepts Learned
Value Persistence: A useRef variable persists its value across component re-renders.

No Re-rendering: Changing the value of ref.current does not trigger a component re-render.

Comparison with Normal Variables: Normal variables re-initialize on every render,
 whereas useRef retains its data throughout the component lifecycle.

Syntax Structure: Creating a ref returns a mutable object: const x = useRef(0); // x = { current: 0 }.

🚀 Getting Started
Clone the repository:

Bash
git clone [https://github.com/mqkhan125/react-useref-mastery.git]
(https://github.com/mqkhan125/react-useref-mastery.git)
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
👤 Author
M Qasim Khan

GitHub: @mqkhan125
