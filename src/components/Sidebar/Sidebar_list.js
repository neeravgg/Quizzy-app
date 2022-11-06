import React from "react";
import SidebarContext from "../context/SidebarContext";
import useMediaQuery from "../hooks/useMediaQuery";
import Menu from "./Sidebar_menu";

export default function SideBar_list() {
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function hide() {
    return !Open && "hidden";
  }

  return (
    <ul
      className={`${isLaptop ? "space-y-7" : hide()}  space-y-4 tracking-wide `}
    >
      {Menu.filter((Menu) => Menu.index < 6).map((Menu) => (
        <li>
          <a
            href={Menu.link}
            className={` ${
              Open ? "px-5 justify-start" : "px-4 justify-center"
            }  rounded-3xl py-3 flex justify-start items-center space-x-4  hover:bg-skin-hue transition ease-in duration-100 hover:shadow-lg font-semibold text-xl dark:hover:bg-skin-gold-hover focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75 dark:theme-dark   ${isTablet &&
              "text-md"} `}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`${Open ? "w-7 h-7" : "w-8 h-8"}`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                className=' text-skin-svg-accent  group-hover:text-skin-svg-hover dark:theme-dark transition ease-in duration-100'
                fillRule='evenodd'
                d={Menu.path1}
                clipRule='evenodd'
              />
              <path
                className=' text-skin-svg-muted group-hover:text-skin-svg-hover-muted dark:theme-dark transition ease-in duration-100'
                fillRule='evenodd'
                d={Menu.path2}
                clipRule='evenodd'
              />
            </svg>
            <span
              className={` text-skin-base dark:theme-dark  
            ${!Open && "hidden"}`}
            >
              {Menu.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
