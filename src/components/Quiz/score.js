import React, { useContext } from "react";
import TestContext from "../context/TestContext";

export default function score({ score, length }) {
  const { timer } = useContext(TestContext);
  return (
    <div>
      <span className='w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5'>
        You scored {score} out of {length}
      </span>
    </div>
  );
}
