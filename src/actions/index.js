import React from "react";

export const increase = () => {
  return {
    type: "increment",
  };
};
export const decrease = () => {
  return {
    type: "decrement",
  };
};
export const reset = () => {
  return {
    type: "reset",
  };
};
