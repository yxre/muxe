import React, {useState} from "react";
import {Menu} from "@/components/Menu";

export const Navbar = () => {

  return (
    <nav className="bg-white border-gray-200 dark:border-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-b-2  dark:bg-gray-950 drop-shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="/img/logo.png" className="h-8 mr-3 dark:hidden" alt="Muise Logo" />
          <img src="/img/logo-dark.png" className="h-8 mr-3 hidden dark:block" alt="Muise Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-2xl font-light">m</span>UX<span className="text-2xl font-light">e</span>
          </span>
        </a>
        <Menu/>
      </div>
    </nav>
  );
};
