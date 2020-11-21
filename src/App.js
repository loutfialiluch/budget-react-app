import React from "react";
import "./App.css";
import Top from "./components/Top/Top";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Top />
          <Middle />
          <Bottom />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
