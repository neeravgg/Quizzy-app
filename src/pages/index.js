import React, { useEffect } from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "../components/utils/requireAuth";

export default function App() {
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getForm/${id}`)
      .then((newData) => newData.json())
      .then((data) => {
        localStorage.setItem("formData", JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <DashBoard />;
    </>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
