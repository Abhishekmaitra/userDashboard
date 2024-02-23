import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesRenderer from "./routes/RoutesRenderer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesRenderer />
      </BrowserRouter>
    </div>
  );
}

export default App;
