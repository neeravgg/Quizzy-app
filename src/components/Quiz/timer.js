import React, { useContext } from "react";
import Countdown from "react-countdown";
import TestContext from "../context/TestContext";

export default function timer({ submit, duration }) {
  const { setShowScore, setTimer } = useContext(TestContext);
  const startDate = React.useRef(Date.now());

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      submit();
      setTimer(true);
      setShowScore(true);
    } else {
      // Render a countdown
      return (
        <div className='flex flex-row items-center'>
          <span
            className={`font-mono text-3xl sm:text-5xl bg-amber-100 dark:bg-skin-hue p-1 rounded-xl  ${
              minutes < 2 ? "text-red-500" : "text-black"
            } `}
          >
            {minutes}
          </span>

          <span className=' font-mono text-4xl'>:</span>

          <span
            className={`font-mono text-3xl sm:text-5xl bg-amber-100 dark:bg-skin-hue p-1 rounded-xl ${
              minutes < 2 ? "text-red-500" : "text-black"
            }`}
          >
            {seconds}
          </span>
        </div>
      );
    }
  };
  return (
    <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-amber-300 dark:bg-skin-hue-hover rounded-xl'>
      <Countdown date={startDate.current + duration()} renderer={renderer} />
    </div>
  );
}
