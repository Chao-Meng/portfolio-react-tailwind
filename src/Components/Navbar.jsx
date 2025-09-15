import { Link, NavLink } from "react-router-dom";


export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 bg-white dark:bg-zinc-800/70 backdrop-blur shadow rounded-xl">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-12">
        <div className="font-bold text-lg">
          <Link href="/">Athena</Link></div>
        <div className="flex gap-6">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-teal-600" : "hover:text-teal-600"}>Home</NavLink>
          <NavLink to="/experience" className={({isActive}) => isActive ? "text-teal-600" : "hover:text-teal-600"}>Experience</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "text-teal-600" : "hover:text-teal-600"}>Projects</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-teal-600" : "hover:text-teal-600"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-teal-600" : "hover:text-teal-600"}>Contact</NavLink>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 transition"
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"} 
        </button>
      </div>
    </nav>
  );
}

