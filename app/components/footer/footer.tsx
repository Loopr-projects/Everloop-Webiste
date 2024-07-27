import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function footer() {
  return (
    <footer className="font-poppins text-white w-full h-screen flex flex-col justify-center items-center gap-1">
      <div className="flex items-center justify-center w-full gap-1 min-h-[308px] text-[24px]">
        <div className="bg-black rounded-[50px]  w-1/2 h-full flex items-center justify-center p-20">
          <p className="text-[24px]">
            Here at <span className="text-mauve-100"> Everloop </span> we want
            to put Belgian made digital experiences back on the map. Started in
            2024 we seek out to fulfill the digital needs of people. Let's make
            things we are both passionate about!
          </p>
        </div>
        <div className="w-1/2 flex gap-1 items-center justify-center h-full">
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between">
            <h4 className="font-medium text-white/70">EXPLORE</h4>
            <nav className="flex flex-col justify-end gap-3">
              <p>Our story</p>
              <p>Projects</p>
              <p>Pricing</p>
              <p>Team</p>
            </nav>
          </div>
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between">
            <h4 className="font-medium text-white/70">FOLLOW</h4>
            <nav className="flex flex-col justify-end gap-3">
              <p>LinkedIn</p>
              <p>Dribbble</p>
              <p>Behance</p>
              <p>Instagram</p>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black rounded-t-[50px] font-poppins  flex flex-col items-center justify-center gap-20 relative">
        <h1 className="text-center font-medium text-8xl uppercase gradient-text">
          LET'S CREATE SOMETHING WE ARE
          <br /> BOTH PASSIONATE ABOUT.
        </h1>
        <div className="text-4xl font-normal flex gap-4 items-center">
          info@everloop.be
          <ArrowUpRightIcon className="w-9 h-9" />
        </div>
        <div className="bottom-0 absolute flex flex-col gap-2 p-2 text-white/20 w-full items-center">
          <hr className="w-4/5 h-[1px] border-white/20" />
          <div className="flex justify-between items-center w-4/5 pl-4 pr-4">
            <p>Designed by Everloop</p>
            <div className="flex gap-5">
              <p>Privacy policy</p>
              <p>Site map</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
