import React, { useCallback, useState } from "react";
import { Button } from "reactstrap";

const Child = React.memo(({ handleChange, setShow }) => {
  console.log("Child ran");
  return (
    <>
      <p>{handleChange()}</p>
      <Button className="m-2" outline onClick={() => setShow((prev) => !prev)}>
        Change
      </Button>
    </>
  );
});

const HookUseCallback = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const [show, setShow] = useState(false);

  const handleChange = useCallback(() => {
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
      <div>useCallback Hook</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>

      <Child handleChange={handleChange} setShow={setShow} />
    </div>
  );
};

export default HookUseCallback;
