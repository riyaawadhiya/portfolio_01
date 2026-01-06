import { useState } from "react";
import { Menu, X} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "About", to: "/" },
    { label: "Projects", to: "/projects" },
  ];

  const sectionName =
    navLinks.find(link => link.to === location.pathname)?.label || "";

  return (
    <>
      {/* Section Title */}
      <div className="flex flex-col absolute top-16 left-20 z-50">
        <span className="text-3xl font-extrabold text-white hover:text-yellow-300">
          {sectionName}
        </span>
        <span className="mt-1 h-1 w-14 bg-yellow-300 rounded-full"></span>
      </div>

      {/* Navigation */}
      <div className="absolute top-9 right-6 px-4 py-3 text-white">
        {/* Mobile Toggle */}
        <div className="lg:hidden flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4 text-yellow-300 font-semibold`}
        >
          {/* Internal links */}
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`hover:text-blue-400 ${
                location.pathname === to ? "text-blue-400" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* External links */}
          <a
            href="https://github.com/riyaawadhiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/riya-awadhiya-888518281/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1"
          >
             LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1IZ7bcIiO-ozMw0-LUH3zfYHDgVvS4dr5/view?usp=drivesdk"
            download
            className="hover:text-white flex items-center gap-1"
          >
      Resume
          </a>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
