import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 py-2 bg-white drop-shadow-xl">
      <div className="flex items-center">
        <Link to="/" className="h-16 aspect-square">
          <img src="/brand/logo.png" alt="Mortal Trading" className="h-16" />
        </Link>
        <h1 className="text-primary text-2xl font-kalnia font-bold">
          Mortal Trading
        </h1>
      </div>
      <div className="hidden lg:flex gap-1 hover:[&>a]:border-blue-600 [&>a]:border-transparent [&>a]:border [&>a]:px-4 [&>a]:py-1 [&>a]:rounded-xl">
        <a href="/#about">About</a>
        <a href="/#services">Services</a>
        <a href="/#footer">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
