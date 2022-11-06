import React from "react";
import SidebarContext from "../context/SidebarContext";
import useMediaQuery from "../hooks/useMediaQuery";
import Card from "./Card";
import Middle from "./Middle";
import { useSession } from "next-auth/react";

export default function DashBoard() {
  const { data: session } = useSession();
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function greet() {
    var data = [
        [21, "Studying late,"],
        [18, "Good evening,"],
        [12, "Good afternoon,"],
        [8, "Good morning,"],
        [4, "Early bird,"],
        [0, "Working hard,"],
      ],
      hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
      if (hr >= data[i][0]) {
        return data[i][1];
      }
    }
  }
  function srink() {
    return Open ? "pl-[17rem] px-6" : "pl-[7rem] px-6";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${isTablet &&
        "px-10"} px-2  mt-16 py-10 min-h-screen min-w-screen  flex  justify-center  `}
    >
      <div
        className={`flex flex-col  min-h-screen w-screen items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14"} gap-10  `}
      >
        {/* profile badge */}
        <div
          className={`flex flex-row justify-center items-center rounded-3xl bg-skin-base  dark:bg-gradient-to-r from-[#323232] to-[#292929] shadow-md py-3 w-full sm:w-4/6 lg:w-5/12 gap-2 sm:gap-4 `}
        >
          <img
            src={session?.user.image}
            alt='user img'
            className={`w-12 h-12 sm:w-20 sm:h-20 shadow-md dark:theme-dark justify-center align-middle rounded-full object-cover`}
          />
          {/* Greet text*/}
          <div
            className={` flex flex-col justify-center gap-1 bg-skin-hue dark:bg-skin-gold px-3 py-2 sm:px-8 rounded-3xl`}
          >
            <div className={` inline-flex items-baseline gap-2`}>
              <span
                className={` text-[0.8rem] sm:text-[1rem] md:text-lg text-skin-muted dark:theme-dark font-semibold  `}
              >
                {greet()}
              </span>
              <span
                className={` text-lg sm:text-2xl md:text-3xl text-skin-base dark:theme-dark font-bold capitalize  `}
              >
                {session?.user.name}
              </span>
            </div>
            <span
              className={` text-[0.6rem] sm:text-[0.8rem] md:text-[0.9rem] text-skin-muted dark:theme-dark italic text-center`}
            >
              Here is all your progress and more
            </span>
          </div>
        </div>
        <div className={`w-full sm:w-4/6 md:w-5/6 px-1`}>
          <Middle />
        </div>
        <div className='w-full h-3/6 px-1'>
          <Card />
        </div>
      </div>
    </div>
  );
}
