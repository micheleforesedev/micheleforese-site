import { Link } from "gatsby";
import React from "react";

function Navbar() {
  const links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/docs",
      name: "Docs",
    },
  ];

  return (
    <nav className="sticky top-0 flex flex-wrap items-center justify-between bg-blue-300 border-gray-200 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center flex-shrink-0 text-white">
          <h1 className="p-2 text-4xl text-green-700 text-bold">
            Michele Forese
          </h1>
        </div>
        <div className="flex flex-row">
          {links.map((link) => (
            <Link
              className="mx-4 my-2 underline uppercase text-bold decoration-sky-500 decoration-2"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
