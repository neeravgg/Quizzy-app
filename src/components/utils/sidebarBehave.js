import React, {useContext} from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import SidebarContext from "../context/SidebarContext";

export default function SidebarBehave(props) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const { Open } = useContext(SidebarContext);
 

  function srink() {
    return Open ? "pl-[14rem] px-6" : "pl-[4rem] px-6";
  }
  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center`}
    >
      {props.children}
    </div>
  );
}
