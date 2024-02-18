<<<<<<< HEAD
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../actions";

const Redux = () => {
  const myState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="mt-4">Count = {myState}</h1>

      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increase())}
=======
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
>>>>>>> 0aa407151ab7ca18263a617fc783ecce9aad1d9a
        >
          Increment
        </button>
        <button
          className="btn btn-warning"
<<<<<<< HEAD
          onClick={() => dispatch(decrease())}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>
=======
          onClick={() => dispatch("decrement")}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={() => dispatch("reset")}>
>>>>>>> 0aa407151ab7ca18263a617fc783ecce9aad1d9a
          Reset
        </button>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 0aa407151ab7ca18263a617fc783ecce9aad1d9a

export default Redux;
