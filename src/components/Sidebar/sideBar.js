import React from "react";
import SidebarContext from "../context/SidebarContext";
import SideBar_list from "./Sidebar_list";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SideBar() {
  const { data: session } = useSession();
  const { Open, setOpen } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  function hide() {
    return Open ? "translate-x-0 w-70 px-2" : "-translate-x-full w-0 ";
  }
  function srink() {
    return Open ? "w-70 px-4" : "w-20 px-2";
  }

  return (
    <div>
      <aside
        className={` ${
          isLaptop ? srink() : hide()
        }    flex flex-col justify-between ml-0 fixed z-10 top-0 pb-3 h-full  font-raleway bg-skin-base dark:bg-gradient-to-tr from-[#19191b] to-[#2c2c2e]  border-skin-base dark:theme-dark transition duration-200 ease-in-out dark:shadow-none shadow-gray-400 shadow-sm   `}
      >
        <div
          className={` sm:mt-[5rem] md:mt-[5rem] lg:mt-[6rem] flex justify-center items-center   py-3 -mr-5 flex-none`}
        >
          <button
            aria-label='sidebar-arrow'
            className={`hidden lg:block absolute -right-7 top-36  p-2  shadow-gray-400    bg-skin-btn-accent hover:bg-skin-btn-hover theme-amber active:bg-skin-btn-accent    text-lg rounded-full   cursor-pointer transition duration-200 ease-in-out  ${!Open &&
              "rotate-180 "}`}
            onClick={() => setOpen(!Open)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-11 w-11 text-skin-base'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        </div>

        {/* Sidebar List */}
        <SideBar_list />

        {/* Profile pic & button */}

        <div className=' flex-none'>
          {Open && (
            <div
              className={` ${Open &&
                "px-2 py-4 pb-6 "} border-t-2 border-skin-base border-rounded dark:theme-dark  flex flex-row items-center `}
            >
              <div className='flex-none'>
                {session && (
                  <img
                    src={session?.user.image}
                    alt='user img'
                    className={` w-12 h-12 shadow-md  rounded-full object-cover `}
                  />
                )}
              </div>

              <span
                className={` mt-1 px-5 text-xl font-semibold text-skin-base  dark:theme-dark flex-auto text-center`}
              >
                {session?.user.name}
              </span>
            </div>
          )}

          {/* Take test */}
          <div className='flex justify-between items-center'>
            <Link href='/unitTest'>
              <button
                className={` ${!isLaptop &&
                  !Open &&
                  "hidden"} px-4 py-4 w-full text-lg justify-center flex items-center bg-skin-btn-accent hover:bg-skin-btn-hover theme-amber space-x-2 rounded-3xl  transition ease-in duration-100 shadow-md `}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7 text-skin-base'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                  <path
                    fillRule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span
                  className={`font-raleway font-bold text-skin-base ${!Open &&
                    "hidden"} `}
                >
                  Take test
                </span>
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
