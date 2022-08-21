import React, { useRef, useState } from "react";
import { Button } from "reactstrap";

const HookUseRef = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const countRef = useRef();

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubtract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <div>
      <div>useRef Hook</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      <span ref={countRef}>{count.num}</span>
      <span>{count.id}</span>
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>
      <p />

      <Button
        className="m-2"
        outline
        onClick={() => {
          countRef.current.innerHTML = "10";
        }}
      >
        Change to 10
      </Button>
    </div>
  );
};

export default HookUseRef;
