import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Index from "./pages/index"
import Footer from "./components/footer"
import hljs from "highlight.js"
import "/node_modules/highlight.js/styles/base16/gruvbox-dark-hard.css"
import { Suspense, lazy } from "react"

const Projects = lazy(() => import("./pages/projects"))
const Practice = lazy(() => import("./pages/practice"))

function App() {
  const currentDev = "Steve Fisher"

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index hljs={hljs} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/practice" element={<Practice hljs={hljs} />} />
            </Routes>
          </Suspense>
        </div>
        <Footer name={currentDev} />
      </div>
    </>
  );
}

export default App
