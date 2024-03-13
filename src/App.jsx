import React from "react";
import ReducerApp from "./ReducerApp";
import StateApp from "./StateApp";
import Todos from "./Todos";

export default function App() {
  return (
    <div>
      <h1>Normal approch</h1>
      <Todos />
      <hr />
      <h1>Using useState Hook</h1>
      <StateApp />
      <hr />
      <h1>Using useReducer Hook</h1>
      <ReducerApp />
    </div>
  );
}
