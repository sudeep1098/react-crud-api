import React, { useReducer } from "react";

function Redux() {
  const initialvalue = 0;
  function reducer(state, action) {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return initialvalue;

      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialvalue);
  return (
    <>
      <h1>Count = {count}</h1>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => dispatch("increment")}
        >
          Increment
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch("decrement")}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={() => dispatch("reset")}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Redux;
