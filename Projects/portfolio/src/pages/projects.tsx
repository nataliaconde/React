import React from "react";

type Props = {};

export default function projects({}: Props) {
  useLayoutEffectect(() => {
    hljs.highlightAll();
  }, []);
  return <div className="text-slate-300 text-center">projects</div>;
}
