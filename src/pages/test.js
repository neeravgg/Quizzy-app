import React, { useEffect, useContext } from "react";
import useMediaQuery from "../components/hooks/useMediaQuery";
import IndicatorCards from "../components/indicatorCards";
import { requireAuth } from "../components/utils/requireAuth";
import { useRouter } from "next/router";
import SidebarBehave from "../components/utils/sidebarBehave";
import TestContext from "../components/context/TestContext";

export default function PracticeTest() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const Router = useRouter();
  const { FinalTest } = useContext(TestContext);

  useEffect(() => {
    if (FinalTest === "2") Router.push("/reward");
  });

  return (
    <>
      {/* <FormAuth /> */}
      <SidebarBehave>
        {/* main page */}
        <div
          className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
        >
          {/* header */}
          <div
            className={`flex flex-col  rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-center text-center  gap-4  w-full sm:w-11/12 md:w-9/12 `}
          >
            <span
              className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-full  shadow-sm  dark:theme-dark font-bold capitalize `}
            >
              FINAL TEST
            </span>

            <div className='flex flex-col  rounded-3xl bg-skin-hue dark:bg-skin-gold-hover shadow-md  py-3 lg:py-5  gap-3  w-full sm:w-11/12 lg:w-9/12 px-1 '>
              <span
                className={` bg-skin-muted rounded-xl text-lg sm:text-xl text-skin-base dark:theme-dark font-bold`}
              >
                Before starting the Final Test:
              </span>
              <div className='flex flex-col items-center text-start'>
                <ul className='list-disc space-y-3  text-sm sm:text-md md:text-lg text-skin-muted dark:theme-dark  px-7 sm:px-8 lg:px-10 '>
                  <li>Attempt all the Units before the final test.</li>
                  <li>
                    Also, all the Units should be passed with 40% or more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* selection */}
          <div
            className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full sm:w-8/12 lg:w-6/12 px-3 sm:px-5 lg:px-1 py-5 sm:py-8 lg:py-10  
             `}
          >
            <div className={`w-full sm:w-10/12 lg:w-10/12`}>
              {/* card */}
              <IndicatorCards value='4' />
            </div>
          </div>
        </div>
      </SidebarBehave>
    </>
  );
}
export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
