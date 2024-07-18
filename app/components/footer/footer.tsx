import React from "react";

export default function footer() {
  return (
    <footer className="font-poppins text-white w-full h-screen flex flex-col justify-center items-center gap-1">
      <div className="flex items-center justify-center w-full gap-1 min-h-[308px] text-[24px]">
        <div className="bg-black rounded-[50px]  w-1/2 h-full flex items-center justify-center p-20">
          <p className="text-[24px]">
            Here at Everloop we want to put Belgian made digital experiences
            back on the map. Started in 2024 we seek out to fulfill the digital
            needs of people.
          </p>
        </div>
        <div className="w-1/2 flex gap-1 items-center justify-center h-full">
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between">
            <h4 className="font-medium">EXPLORE</h4>
            <nav className="flex flex-col justify-end gap-3">
              <p>Our story</p>
              <p>Projects</p>
              <p>Pricing</p>
              <p>Team</p>
            </nav>
          </div>
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between">
            <h4 className="font-medium">FOLLOW</h4>
            <nav className="flex flex-col justify-end gap-3">
              <p>LinkedIn</p>
              <p>Dribbble</p>
              <p>Behance</p>
              <p>Instagram</p>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black rounded-t-[50px] font-poppins  flex flex-col items-center justify-center gap-20">
        <h1 className="text-center font-medium text-8xl uppercase gradient-text">
          DIGITAL EXPERIENCE MAKERS.
          <br /> STAY IN THE LOOP.
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Your email"
            className="bg-white rounded-full min-w-80 placeholder:text-mauve-400 placeholder:text-[16px] p-5 placeholder:text-center text-mauve-400"
          />
          <button className="absolute h-[50px] w-[50px] top-2 bottom-2 right-2  rounded-full bg-mauve-100 text-mauve-400 flex items-center justify-center">
            x
          </button>
        </div>
      </div>
    </footer>
  );
}
