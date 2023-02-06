import React from "react"
import Forecast from "./components/Forecast/Forecast"
import "./App.css"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flexxall's Weather App</h1>
        <form>
          <label className="flex items-center cursor-pointer ml-4" x-data="themeMode">
            <div className="realtive">
              <input type="checkbox" />
              <div className="block bg-gray-300 dark:bg-gray-700 w-12 h-7 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-shite w-5 h-5 rounded-full transition"></div>
            </div>
          </label>
        </form>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        <a href="mailto:flexxall@live.com">FlexxDev</a>
      </footer>
    </div>
  )
}

export default App
