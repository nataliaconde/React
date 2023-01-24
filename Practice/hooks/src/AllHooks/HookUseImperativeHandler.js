import React, { useRef } from "react";
import { Button } from "reactstrap";
import Counter from "../Components/Counter";

const HookUseImperativeHandler = () => {
  const ref = useRef();
  return (
    <div>
      <div>useImperativeHandle Hook</div>
      <p />
      <Button
        className="m-2"
        outline
        onClick={() => ref.current.handleSubtract()}
      >
        -
      </Button>
      <Counter ref={ref} />

      <Button className="m-2" outline onClick={() => ref.current.handleAdd()}>
        +
      </Button>
    </div>
  );
};

export default HookUseImperativeHandler;
