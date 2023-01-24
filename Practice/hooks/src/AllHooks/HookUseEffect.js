import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const HookUseEffect = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    });
    console.log("ran");
    return () => {
      //window.removeEventListener("resize");
      console.log("ran returned");
    };
  }, [count]); // Empty array the useEffect will run only once
  // add state to the array [count] useEffect will run every time state changes
  return (
    <div>
      <div>useEffect Hook</div>
      <p>Screen Width: {screenWidth}</p>
      <p>Screen Hight: {screenHeight}</p>
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

export default HookUseEffect;
