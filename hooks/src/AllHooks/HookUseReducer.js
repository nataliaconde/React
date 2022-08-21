import React, { useReducer } from "react";
import { Button } from "reactstrap";

const HookUseReducer = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "subtract":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <div>useReducer Hook</div>
      <p />
      <Button
        className="m-2"
        outline
        onClick={() => dispatch({ type: "subtract", payload: 5 })}
      >
        -
      </Button>
      <span>{state}</span>
      <Button className="m-2" outline onClick={() => dispatch({ type: "add" })}>
        +
      </Button>
    </div>
  );
};

export default HookUseReducer;
