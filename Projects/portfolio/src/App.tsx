import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Index from "./pages/index";
import Projects from "./pages/projects";
import Practice from "./pages/practice";
import Footer from "./components/footer";
// import { useLayoutEffect } from "react";
import hljs from "highlight.js";
import "/node_modules/highlight.js/styles/base16/gruvbox-dark-hard.css";

function App() {
  const currentDev = "Steve Fisher";

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index hljs={hljs} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/practice" element={<Practice hljs={hljs} />} />
          </Routes>
        </div>
        <Footer name={currentDev} />
      </div>
    </>
  );
}

export default App;
