import React, { useState } from "react";
import { Button } from "reactstrap";

const HookUseState = () => {
  //const [count, setCount] = useState(0);
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const handleAdd = () => {
    //setCount(count + 1); // <-- asynchronus
    //setCount((prev) => prev + 1); // <-- synchronus
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
      <div>useState Hook</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      {/* <span>{count}</span> */}
      <span>{count.num}</span>
      <span>{count.id}</span>
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>
    </div>
  );
};

export default HookUseState;
