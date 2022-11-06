import React, { useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarProvider = (props) => {
  const [Open, setOpen] = useState(false);
 
  return (
    <SidebarContext.Provider value={{Open,setOpen}}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
