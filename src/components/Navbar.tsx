import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isDocs = location.pathname === "/docs";

  if (location.pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
        Darwin
      </Link>

      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        <Link
          to="/docs"
          className={`hover:opacity-70 transition-opacity ${
            isDocs ? "opacity-100 underline underline-offset-4" : "opacity-60"
          }`}
        >
          Documentation
        </Link>
        <a
          href="https://github.com/andreamicheli/Darwin"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
