import DarkMode from "./components/DarkMode/DarkMode"
import Forecast from "./components/Forecast/Forecast"

function App() {

  return (
    <div className="h-screen bg-orange-200 duration-300 ease-in-out dark:bg-zinc-800 dark:text-zinc-200">
      <header className="flex  bg-primary text-primary py-5 mb-10">
        <DarkMode />
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
