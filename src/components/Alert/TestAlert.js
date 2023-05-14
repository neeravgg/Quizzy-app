import { useEffect } from "react";
import Router from "next/router";
import { useBeforeUnload } from "react-use";

export const UseLeavePageConfirm = (isConfirm) => {
  

  useEffect(() => {
    const handler = () => {
      if (isConfirm && !window.confirm(message)) {
        throw "Route Canceled";
      }
    };

    Router.events.on("beforeHistoryChange", handler);

    return () => {
      Router.events.off("beforeHistoryChange", handler);
    };
  }, [isConfirm, message]);
};
