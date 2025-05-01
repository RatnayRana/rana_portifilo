"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignJustify, MoveRight, MoveUpRight } from 'lucide-react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Only useState is needed

  return (
    <header className="h-18 flex flex-row justify-between items-center lg:justify-around  text-white p-4 ">
      <h1 className="text-xl ml-4">RanaC.</h1>
      <nav className="hidden lg:flex justify-center items-center w-[40%] ">
        <ul className="flex flex-row items-center  justify-center gap-[20%] lg:text-base">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex mx-4 gap-5 md:flex md:gap-15">
        <div className=" flex flex-row item-center justify-center md:flex md:gap-4">
          <button className="flex text-xs text-nowrap mt-3 lg:text-base">Motion On</button>
          <div className="hidden md:flex lg:gap-23 relative group md:gap-23 ">
            <Button className="h-[45px] w-40 md:h-11 sm:text-base md:text-sm  lg:text-sm    bg-pinkcolor rounded-full ">
              Start a Project
            </Button>

            <Button className="h-12 w-12 md:h-11 rounded-full bg-pinkcolor z-30 absolute left-36">
            <MoveUpRight  className="group-hover:hidden  " size={100} />
            <MoveRight className="hidden group-hover:block " size={100}/>
            
            </Button>
          </div>
        </div>

        <div className="lg:hidden  relative md:mt-1  ">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="text-white text-3xl focus:outline-none border w-10 flex justify-center"
          >
                <AlignJustify size={34} />

          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <ul className="absolute right-0 top-full mt-2 bg-white text-black rounded shadow-lg p-4 space-y-2 z-50 w-40">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
