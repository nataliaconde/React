import React from "react";

type Props = { name: string };

export default function footer({ name }: Props) {
  return (
    <div className="text-slate-300 text-lg text-center italic  bottom-0">
      {name}
    </div>
  );
}
