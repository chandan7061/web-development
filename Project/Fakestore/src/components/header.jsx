import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-blue-500 flex justify-between p-4">
      <FaStore className= "text-2xl text-white" />

      <div className="flex gap-4">
        <Link to="/" className="text-white">
          Home
        </Link>

        <Link to="/about" className="text-white">   
          About
        </Link>

        <Link to="/contact" className="text-white">
          Contact
        </Link>

        <Link to="/products" className="text-white">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Header;
