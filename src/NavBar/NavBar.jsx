import React from "react";
import Links from "./Links";

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
  return (
    <ul className="flex gap-8 py-4">
        {
            navLinks.map(route => <Links key = {route.id} route = {route}></Links>)
        }
    </ul>
  );
};

export default NavBar;
