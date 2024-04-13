import "./App.css";
import FloatingShoe from "./FloatingShoe";
import { Overlay } from "./Overlay";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <FloatingShoe />
      <Overlay />
    </div>
  );
}

export default App;
