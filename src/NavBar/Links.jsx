import React from "react";

const Links = ({ route }) => {
  // console.log(route);
  return (
    
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    
  );
};

export default Links;
