import { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, name: action.payload }];
      break;
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD_TASK", payload: e.target.value });
    }
  };

  return (
    <>
      <h3>Task List: {todo.length}</h3>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />

      <ul>
        {todo.map((val) => (
          <li key={val.id}>
            {val.name}
            <button
              onClick={() => dispatch({ type: "DELETE", payload: val.id })}
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
