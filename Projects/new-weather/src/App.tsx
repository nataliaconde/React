import { useState, useEffect } from "react"
import Forecast from "./components/Forecast/Forecast"
import "./App.css"

function App() {
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
    <div className="h-screen bg-orange-200 duration-300 ease-in-out dark:bg-zinc-800 dark:text-zinc-200">
      <header className="bg-primary text-primary py-5 mb-10">
        <label className="flex justify-center items-center p-2 text-xl">
          Dark Mode
          <input type="checkbox" className="appearance-none peer" onClick={handleTheme} />
          {(theme === "dark")
            ?
            <span className="w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-sky-900 rounded-full duration-300 ease-in-out after:w-6 after:h-6 after:bg-slate-500 after:rounded-full after:shadow-toggleDark after:duration-300 after:translate-x-6"></span>
            :
            <span className="w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 rounded-full duration-300 ease-in-out bg-orange-400 after:w-6 after:h-6 after:bg-yellow-300 after:rounded-full after:shadow-toggleLight after:duration-300 "></span>
          }

        </label>
      </header>
      <main>
        <Forecast />
      </main>
      <footer className="text-center absolute inset-x-0 bottom-2">
        <a href="mailto:flexxall@live.com">FlexxDev</a>
      </footer>
    </div>

  )
}

export default App
