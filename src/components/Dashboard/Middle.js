import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import IndicatorCards from "../../components/indicatorCards";

function Middle() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center px-3 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6`}
    >
      <div
        className={`${
          isLaptop ? "grid grid-cols-2 " : "grid grid-rows-2"
        } w-full md:w-11/12 gap-6`}
      >
        <IndicatorCards value='5' />
      </div>
    </div>
  );
}

export default Middle;
