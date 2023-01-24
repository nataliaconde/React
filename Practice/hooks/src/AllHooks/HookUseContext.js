import React, { useContext } from "react";
import { Button } from "reactstrap";
import { HookDemo } from "../Context";

const HookUseContext = () => {
  const { count, setCount } = useContext(HookDemo);

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
      <div>useContext Hook</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>
    </div>
  );
};

export default HookUseContext;
