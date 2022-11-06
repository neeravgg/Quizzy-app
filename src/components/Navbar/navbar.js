import React, { useContext } from "react";
import Toggle from "./Toggle";
import SidebarContext from "../context/SidebarContext";
import useMediaQuery from "../hooks/useMediaQuery";
import Title from "./navbarTitle";
import { useRouter } from "next/router";
import Image from "next/image";
import TestContext from "../context/TestContext";

const Navbar = () => {
  const { setlogoutAlert } = useContext(TestContext);
  const { Open, setOpen } = useContext(SidebarContext);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const router = useRouter();

  return (
    <div
      className={`w-full fixed top-0 inset-x-0 z-50 ml-auto font-heebo font-semibold shadow-md dark:shadow-none border-b border-skin-base dark:theme-dark`}
    >
      {/* Navbar */}
      <div className='h-16 py-6 bg-skin-base dark:theme-dark dark:shadow-none '>
        <div
          className={`flex flex-row items-center justify-between md:px-10 px-1  -mt-10 `}
        >
          {/* Hamburger */}
          {!isLaptop && (
            <button
              aria-label='Hamburger-icon'
              className={`flex-none dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent shadow-sm shadow-gray-400 p-2 focus:outline-none text-lg rounded-2xl cursor-pointer transition duration-200 ease-in-out  `}
              onClick={() => setOpen(!Open)}
            >
              {/* hamburger svg */}
              {!Open && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`${
                    isTablet ? "h-8 w-8" : "h-7 w-7"
                  } text-skin-inverted`}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              )}

              {/* close svg */}
              {Open && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`${
                    isTablet ? "h-8 w-8" : "h-7 w-7"
                  }  text-skin-inverted `}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          )}
          {/* logo */}
          <div className='flex-none justify-between'>
            <a href='/' title='Nature Intake'>
              <Image
                src='/images/logo2.png'
                width={120}
                height={90}
                quality={80}
                alt='Nature Intake'
                className={`${isTablet && "w-36 h-30"} w-32 h-24 `}
              />
            </a>
          </div>
          {/* page name */}
          {isLaptop && (
            <div className='flex-none mt-1 '>
              <span
                className={` md:text-lg lg:text-2xl text-skin-base dark:theme-dark font-bold  `}
              >
                {Title[router.pathname]}
              </span>
            </div>
          )}
          <div
            className={`flex flex-row flex-none ${isTablet &&
              "gap-7 pr-5"} gap-3 `}
          >
            {/* Dark mode  */}
            <Toggle />
            {/* logout */}
            <button
              onClick={() => {
                setlogoutAlert(true);
              }}
              aria-label='logout'
              className=' dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent shadow-sm shadow-gray-400 p-2  focus:outline-none text-lg rounded-full  ring-transparent cursor-pointer transition duration-100 ease-in-out '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`${
                  isTablet ? "h-8 w-8" : "h-6 w-6"
                } text-skin-inverted `}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
