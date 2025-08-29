
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // function increment(){
  //   dispatch({type: "INCREMENT"})
  // }

  // function decrement(){
  //   dispatch({type: "DECREMENT"})
  // }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
    </div>
  );
}

export default Counter