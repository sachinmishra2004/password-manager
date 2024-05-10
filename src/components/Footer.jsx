import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-700"> &lt;</span>
        Pass
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex">
        Created with <img className="w-5" src="/icon/heart.png" alt="" />
        by Sachin Mishra
      </div>
    </div>
  );
};

export default Footer;
