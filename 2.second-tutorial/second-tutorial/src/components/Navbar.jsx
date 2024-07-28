import React from "react";
//import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="m-2">
      <nav className="bg-lime-700 p-5 rounded-3xl">
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
