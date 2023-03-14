import React from "react";

export default function Score({ score, length }) {
  return (
    <div>
      <span className='w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5'>
        You scored {score} out of {length}
      </span>
    </div>
  );
}
