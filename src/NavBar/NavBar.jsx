import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {

    const links =  navLinks.map((route) => (
            <Links key={route.id} route={route}></Links>
          ))
  const [open, setopen] = useState(false);
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto bg-green-100">
      <div className="flex gap-2" onClick={() => setopen(!open)}>
        {open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}
        <ul className={`md:hidden bg-base-200 absolute ${open ? "top-6" : "-top-40" } duration-1000`}>
            {links}
        </ul>

        <h3>Logo</h3>
      </div>
      <div>
        <ul className="md:flex gap-8 py-4 hidden">
            {
                links
            }
        </ul>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
