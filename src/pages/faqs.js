import React from "react";
import SidebarBehave from "../components/utils/sidebarBehave";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import faq from "../components/FAQ/faq.json";

export default function UnitTest() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
    <SidebarBehave>
      {/* main page */}
      <div
        className={`flex flex-col  w-screen  gap-12 lg:gap-16  px-1 items-center`}
      >
        <div
          className={`flex flex-col h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-center text-center  gap-4  w-full sm:w-5/6 lg:w-4/6   
           `}
        >
          <span
            className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-full  shadow-sm  dark:theme-dark font-bold capitalize `}
          >
            FAQs
          </span>

          <span
            className={` text-sm sm:text-md lg:text-lg text-skin-muted dark:theme-dark italic `}
          >
            Here are your frequently asked questions.
          </span>
        </div>

        {/* bars*/}
        <div
          className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full px-2 py-2
              ${isTablet && "px-4 py-8 w-10/12"} 
              ${isLaptop && "px-10 w-7/12"}`}
        >
          <div className={`flex flex-col gap-4 w-full`}>
            {/* card */}
            {faq.map((menu) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex w-full px-2 sm:px-3 lg:px-5 py-2 gap-2  justify-between rounded-xl bg-skin-hue hover:bg-skin-hue-hover dark:bg-skin-gold  dark:hover:bg-skin-gold-hover  focus:outline-none focus-visible:ring dark:focus-visible:ring-amber-500 focus-visible:ring-opacity-75 `}
                    >
                      <span className='text-md sm:text-lg text-skin-base '>
                        {menu.question}
                      </span>
                      <ChevronUpIcon
                        className={` transition delay-100 ease-in-out ${
                          !open ? "rotate-180 transform" : ""
                        } h-6 w-6 text-skin-base`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 py-5 text-md sm:text-lg text-skin-base bg-skin-muted rounded-xl dark:theme-dark'>
                      {menu.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </SidebarBehave>
  );
}
