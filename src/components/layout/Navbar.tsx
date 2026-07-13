import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Features", path: "/features" },
  { name: "Technology", path: "/technology" },
  { name: "Demo", path: "/demo" },
  { name: "Documentation", path: "/documentation" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 font-bold text-white">
            S
          </div>

          <h1 className="text-2xl font-bold text-white">
            Slide<span className="text-indigo-400">Sense</span>
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-indigo-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Upload Button */}
        <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
          Upload PPT
        </button>

      </div>
    </nav>
  );
}

export default Navbar;