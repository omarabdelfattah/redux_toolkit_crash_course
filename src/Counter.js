import React from "react";
import { useDispatch } from "react-redux";
import { handleIncrement, handleDecrement } from "./redux/features/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter">
        <button onClick={() => dispatch(handleIncrement(1))}> + </button>
        <button onClick={() => dispatch(handleIncrement(3))}> + 3 </button>
        <button onClick={() => dispatch(handleDecrement(1))}> - </button>
      </div>
    </>
  );
}
