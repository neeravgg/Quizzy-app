import React, { useContext } from "react";
import TestContext from "../components/context/TestContext";
import { useRouter } from "next/router";

export default function agree() {
  const Router = useRouter();

  return (
    <div
      className={`flex flex-col  rounded-3xl bg-skin-base dark:bg-[#202020] dark:theme-dark shadow-md py-8 items-center justify-center text-center  gap-8  h-5/6 w-full sm:w-11/12 lg:w-8/12`}
    >
      <span
        className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base py-3 w-full shadow-sm  dark:theme-dark font-bold capitalize `}
      >
        NOTICE
      </span>
      {/* content */}

      {/* button */}
      <div className='mt-7 px-3 sm:px-1 lg:px-8 flex justify-between w-full sm:w-10/12 lg:w-7/12'>
        <button
          type='button'
          className='inline-flex justify-center rounded-2xl border border-transparent px-4 py-2 text-sm lg:text-md font-bold text-white dark:theme-dark bg-skin-btn-mt hover:bg-skin-btn-mt-hover focus:outline-none focus-visible:ring focus-visible:ring-cyan-600 focus-visible:ring-opacity-75'
          onClick={() => {
            setisAgreed(true);
          }}
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
}
