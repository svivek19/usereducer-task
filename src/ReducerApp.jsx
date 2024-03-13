import React from "react";
import { useReducer } from "react";

const initialState = [
  {
    id: 1,
    name: "book",
  },
  {
    id: 2,
    name: "box",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), name: action.payload }];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.newName }
          : item
      );
    default:
      return state;
  }
}

const ReducerApp = () => {
  const [item, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Product List</h2>
      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: prompt("Enter the item Name") })
        }
      >
        Add Item
      </button>

      <ul>
        {item.map((val) => (
          <li key={val.id}>
            {val.name}
            <button
              onClick={() => dispatch({ type: "DELETE", payload: val.id })}
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE",
                  payload: {
                    id: val.id,
                    newName: prompt("Enter the item Name", val.name),
                  },
                })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReducerApp;
