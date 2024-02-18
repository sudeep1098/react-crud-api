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
        >
          Increment
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(decrease())}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Redux;
