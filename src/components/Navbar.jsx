import React from "react";
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-10">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="/">
              About
            </a>
            <a className="hover:font-bold" href="/">
              conatcts
            </a>
          </li>
        </ul>
        <button className="text-white ">
          <img className="invert p-5 w-20" src="/icon/github.png" alt="logo" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
