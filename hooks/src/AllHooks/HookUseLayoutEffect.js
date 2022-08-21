import React, { useLayoutEffect } from "react";

const HookUseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("Hello first");
  }, []);

  return <div>Hello</div>;
};

export default HookUseLayoutEffect;
