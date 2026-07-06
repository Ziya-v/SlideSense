function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold">
            S
          </div>

          <h1 className="text-2xl font-bold text-white">
            Slide<span className="text-indigo-400">Sense</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">Features</li>
          <li className="cursor-pointer hover:text-white">How It Works</li>
          <li className="cursor-pointer hover:text-white">Technology</li>
          <li className="cursor-pointer hover:text-white">Demo</li>
          <li className="cursor-pointer hover:text-white">Contact</li>
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