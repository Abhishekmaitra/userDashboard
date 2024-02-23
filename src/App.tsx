import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesRenderer from "./routes/RoutesRenderer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesRenderer />
      </BrowserRouter>
    </div>
  );
}

export default App;
