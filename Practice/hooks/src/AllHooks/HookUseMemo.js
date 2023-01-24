import React, { useMemo, useState } from "react";
import { Button } from "reactstrap";

const HookUseMemo = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const [show, setShow] = useState(false);

  const handleChange = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return count.num * 2;
  }, [count]);

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
      <div>useMemo Hook</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      {/* <span>{count}</span> */}
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>
      <p>{handleChange}</p>
      <Button className="m-2" outline onClick={() => setShow((prev) => !prev)}>
        Change
      </Button>
    </div>
  );
};

export default HookUseMemo;
