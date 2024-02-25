import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesRenderer from "./routes/RoutesRenderer";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <RoutesRenderer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
