import React from "react";

export const initialState = {
  basket: [],
  user:null,
};

const Reducer = (state, action) =>{
  switch (action.type) {
    case "ADD_TO_BASKET":
        return {
            ...state,
            basket : [...state.basket, action.item]
        };
    default:
      return state;
  }
}

export default Reducer;
