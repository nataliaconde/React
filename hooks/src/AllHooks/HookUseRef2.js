import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Input } from "reactstrap";

const HookUseRef2 = () => {
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

  const [name, setName] = useState("");

  useEffect(() => {
    countRef.current = name;
  }, [name]);

  return (
    <div>
      <div>useRef Hook 2</div>
      <p />
      <Button className="m-2" outline onClick={handleSubtract}>
        -
      </Button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <Button className="m-2" outline onClick={handleAdd}>
        +
      </Button>
      <p />
      <Col className="col-6 m-auto">
        <Input ref={countRef} onChange={(e) => setName(e.target.value)} />
      </Col>
      <p />
      <div>
        {name} is state -- {countRef.current} is ref
      </div>
    </div>
  );
};

export default HookUseRef2;
