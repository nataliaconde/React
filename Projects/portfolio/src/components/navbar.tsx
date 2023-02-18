import { Link } from "react-router-dom"
import DarkMode from "./darkMode"
import resume from "/files/Steve_Fisher_Resume.pdf"

type Props = {}

export default function navbar({ }: Props) {
  return (
    <>
      <div className="flex justify-between px-5 py-2 bg-red-200 dark:bg-slate-900 mb-5 sticky top-0">
        <div className="flex flex-col sm:flex-row gap-4 my-2">
          <Link to="/" className="bg-teal-400 shadow-fd dark:shadow-fdDark rounded px-3 py-1 w-fit">
            Home
          </Link>
          <Link to="/projects" className="bg-teal-400 shadow-fd dark:shadow-fdDark rounded px-3 py-1 w-fit">
            Projects
          </Link>
          <Link to="/practice" className="bg-teal-400 shadow-fd dark:shadow-fdDark rounded px-3 py-1 w-fit">
            Practice
          </Link>
        </div>
        <div className="theme font-normal font-school1"><DarkMode /></div>
        <div className="theme text-4xl text-slate-300 text-end my-auto">FlexxDev</div>
      </div>

      <div className="flex justify-end pr-5">
        <Link to={resume}
          className="bg-teal-400 shadow-fd dark:shadow-fdDark rounded w-fit px-3 py-1 mb-5 text-2xl"
          download
          target="_blank">Get The Resume</Link>
      </div>
    </>
  )
}
