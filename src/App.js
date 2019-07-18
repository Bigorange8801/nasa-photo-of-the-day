import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Button from "./components/Button"
import { Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <CardContainer/>
      <Button/>
    </div>
  );
}

export default App;
