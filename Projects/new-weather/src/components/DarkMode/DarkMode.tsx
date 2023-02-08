import { useEffect, useState } from "react"

const DarkMode = () => {

  const [theme, setTheme] = useState<string>()

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <label className="flex justify-center p-2 text-xl leading-none">
      Theme
      <input type="checkbox" className="appearance-none peer" onClick={handleTheme} />
      {(theme === "dark")
        ?
        <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-sky-900 rounded-full duration-300 ease-in-out after:w-4 after:h-4 after:bg-stone-500 after:rounded-full after:shadow-toggleDark after:duration-300 after:translate-x-6"></span>
        :
        <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 rounded-full duration-300 ease-in-out bg-orange-400 after:w-4 after:h-4 after:bg-yellow-300 after:rounded-full after:shadow-toggleLight after:duration-300 "></span>
      }
    </label>
  )
}
export default DarkMode
