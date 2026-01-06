import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col bg-black lg:flex-row min-h-screen">
        <SideBar />
        <div className="w-full  sm:w-3/4 lg:w-2/3 min-h-screen p-8 m-2 relative top-10 left-16 rounded-2xl flex flex-col">
          <NavBar />
          
          <div className="text-white  border border-blue-300 mt-4 rounded-xl p-4 w-full">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
