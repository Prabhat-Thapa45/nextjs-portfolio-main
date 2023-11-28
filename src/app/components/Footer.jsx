"use client"
import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="flex">
          <Image priority="1" className="hover:shadow-white hover:transition-shadow duration-1000 hover:duration-700  hover:shadow shadow-lg rounded-full " src="https://i.postimg.cc/L4TsXs9f/logo.png" alt="logo" width={75} height={75} /> <p className="text-xs">PT</p>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
