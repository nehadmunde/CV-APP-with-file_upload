import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateCV from "./Components/CreateCV";
import DisplayCV from "./Components/DisplayCV";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateCV />} />
        <Route path="/cv" element={<DisplayCV />} />
      </Routes>
    </div>
  );
}

export default App;
