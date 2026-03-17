import React from "react";

const Links = ({ route }) => {
  // console.log(route);
  return (
    
      <li className="hover:bg-amber-300">
        <a href={route.path}>{route.name}</a>
      </li>
    
  );
};

export default Links;
