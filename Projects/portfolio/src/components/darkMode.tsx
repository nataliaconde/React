import { useEffect } from "react"
import { useAtom } from "jotai"
import { darkModeAtom } from "../Atoms"

const DarkMode = () => {

  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <label className="text-sm lg:text-xl">
      {/* <span className="">Theme</span> */}
      <input type="checkbox" className="appearance-none peer" onClick={(e) => setDarkMode(!darkMode)} />
      {(darkMode)
        ?
        <span className="w-9 h-5 lg:w-12 lg:h-6 flex items-center p-1 rounded-full duration-300 ease-in-out bg-sky-900 after:w-3 after:h-3 lg:after:w-4 lg:after:h-4 after:bg-stone-500 after:rounded-full after:shadow-toggleDark after:duration-300 after:translate-x-4 lg:after:translate-x-6"></span>
        :
        <span className="w-9 h-5 lg:w-12 lg:h-6 flex items-center p-1 rounded-full duration-300 ease-in-out bg-orange-400 after:w-3 after:h-3 lg:after:w-4 lg:after:h-4 after:bg-yellow-300 after:rounded-full after:shadow-toggleLight after:duration-300 "></span>
      }
    </label>
  )
}
export default DarkMode
