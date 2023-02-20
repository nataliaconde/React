import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Index from "./pages/index"
import Footer from "./components/footer"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import typscript from "highlight.js/lib/languages/TypeScript"
import "/node_modules/highlight.js/styles/base16/gruvbox-dark-hard.css"
import { Suspense, lazy } from "react"

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typscript', typscript)

const Projects = lazy(() => import("./pages/projects"))
const Practice = lazy(() => import("./pages/practice"))
const Contact = lazy(() => import("./pages/contact"))

function App() {

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
              <Route path="/contact" element={<Contact hljs={hljs} />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
