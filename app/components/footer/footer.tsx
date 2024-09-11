"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function footer() {
  const [isHovering, setIsHovering] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const takeOff = useAnimation();

  const jiggle = {
    initial: { x: 0 },
    animate: {
      x: [0, -5, 5, -5, 5, -5, 5, -5, 0],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 },
    },
  };

  const spiralOut = {
    initial: { x: 0, y: 0, rotate: 0, scale: 1 },
    animate: {
      x: "100vw",
      y: "-100vh",
      rotate: 360,
      scale: 0,
      transition: { duration: 2, delay: 2 },
    },
  };

  useEffect(() => {
    // Start jiggle animation first
    takeOff.start("animate");

    // After 2 seconds, start spiral out animation
    setTimeout(() => {
      takeOff.start("spiralOut");
    }, 2000);
  }, [takeOff]);

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
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between z-10">
            <h4 className="font-medium text-white/70">EXPLORE</h4>
            <nav className="flex flex-col justify-end gap-3">
              <p>Our story</p>
              <p>Projects</p>
              <p>Pricing</p>
              <p>Team</p>
            </nav>
          </div>
          <div className="bg-black rounded-[50px] px-[54px] py-11 w-full h-full flex justify-between relative">
            <motion.div
              className="absolute top-[350px] right-[350px]  w-[338px] h-[338px]"
              animate={controls}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 13,
                duration: 0.6,
              }}
            >
              <Image
                src={"/assets/linkedin-icon.svg"}
                height={338}
                width={338}
                alt="Linkedin logo"
                className=""
              ></Image>
            </motion.div>
            <motion.div
              className="absolute top-[350px] right-[350px]  w-[338px] h-[338px]"
              animate={controls2}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 13,
                duration: 0.6,
              }}
            >
              <Image
                src={"/assets/dribbble-icon.svg"}
                height={338}
                width={338}
                alt="Linkedin logo"
                className=""
              ></Image>
            </motion.div>
            <motion.div
              className="absolute top-[350px] right-[350px]  w-[338px] h-[338px]"
              animate={controls3}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 13,
                duration: 0.6,
              }}
            >
              <Image
                src={"/assets/instagram-2016-5.svg"}
                height={338}
                width={338}
                alt="Linkedin logo"
                className=""
              ></Image>
            </motion.div>
            <motion.div
              className="absolute top-[350px] right-[350px]  w-[338px] h-[338px]"
              animate={controls4}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 13,
                duration: 0.6,
              }}
            >
              <Image
                src={"/assets/behance.svg"}
                height={338}
                width={338}
                alt="Linkedin logo"
                className=""
              ></Image>
            </motion.div>
            <h4 className="font-medium text-white/70">FOLLOW</h4>
            <nav className="flex flex-col justify-end gap-3">
              <a
                href="/"
                className="hover:underline underline-offset-4"
                onMouseEnter={() =>
                  controls.start({ y: -250, x: 120, rotate: 15 })
                }
                onMouseLeave={() => controls.start({ y: 0, x: 0, rotate: 0 })}
              >
                LinkedIn
              </a>
              <a
                href="/"
                className="hover:underline underline-offset-4"
                onMouseEnter={() =>
                  controls2.start({ y: -250, x: 120, rotate: 15 })
                }
                onMouseLeave={() => controls2.start({ y: 0, x: 0, rotate: 0 })}
              >
                Dribbble
              </a>
              <a
                href="/"
                className="hover:underline underline-offset-4"
                onMouseEnter={() =>
                  controls4.start({ y: -250, x: 120, rotate: 15 })
                }
                onMouseLeave={() => controls4.start({ y: 0, x: 0, rotate: 0 })}
              >
                Behance
              </a>
              <a
                href="/"
                className="hover:underline underline-offset-4"
                onMouseEnter={() =>
                  controls3.start({ y: -250, x: 120, rotate: 15 })
                }
                onMouseLeave={() => controls3.start({ y: 0, x: 0, rotate: 0 })}
              >
                Instagram
              </a>
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
          <motion.div
            initial="initial"
            animate={takeOff}
            variants={{ animate: jiggle.animate, spiralOut: spiralOut.animate }}
            className="w-9 h-9 "
          >
            <ArrowUpRightIcon className="w-9 h-9" />
          </motion.div>
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
