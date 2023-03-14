import React from "react";
import dynamic from "next/dynamic";
import SidebarBehave from "../components/utils/sidebarBehave";
import useMediaQuery from "../components/hooks/useMediaQuery";

export default function UnitTest() {
  const PDFDownload = dynamic(
    () => import("../components/Certificate/GenerateCertificate"),
    {
      ssr: false,
    }
  );
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
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
            className={` text-xl sm:text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-full  shadow-sm  dark:theme-dark font-bold capitalize `}
          >
            🎉CONGRATULATIONS🎉
          </span>

          <div className='flex flex-col  rounded-3xl bg-skin-hue dark:bg-skin-gold-hover shadow-md   py-3 lg:py-5  gap-3  w-full sm:w-11/12 lg:w-9/12 px-1 '>
            <span
              className={` rounded-xl text-md sm:text-xl text-skin-base dark:theme-dark font-bold `}
            >
              Please click on the DOWNLOAD button to get your CERTIFICATE.
            </span>
          </div>
        </div>
        {/* selection */}
        <div
          className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full sm:w-8/12 lg:w-6/12 px-3 sm:px-5 lg:px-1 py-5 sm:py-8 lg:py-10  
             `}
        >
          <PDFDownload />
        </div>
      </div>
    </SidebarBehave>
  );
}
