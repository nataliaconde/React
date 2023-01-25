import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function navbar({}: Props) {
  return (
    <div className="py-2 bg-slate-900 mb-10 sticky top-0">
      <div className="grid grid-flow-col px-5">
        <div className="flex flex-col sm:flex-row gap-4 my-2">
          <Link to="/" className="bg-teal-400 rounded px-3 py-1 w-fit">
            Home
          </Link>
          <Link to="/projects" className="bg-teal-400 rounded px-3 py-1 w-fit">
            Projects
          </Link>
          <Link to="/practice" className="bg-teal-400 rounded px-3 py-1 w-fit">
            Practice
          </Link>
        </div>
        <div className="text-4xl text-slate-300 text-end my-auto">FlexxDev</div>
      </div>
    </div>
  );
}
