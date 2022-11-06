import { useEffect } from "react";
import LoginPage from "../../components/Login/loginPage";
import Router from "next/router";
import { getSession } from "next-auth/react";

export default function Login({ session }) {
  useEffect(() => {
    if(session)
    localStorage.setItem("userId", JSON.stringify(session.user.id));
    else 
    localStorage.setItem("userId", JSON.stringify(null));
  }, []);
  useEffect(() => {
    let isForm;
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/isForm/${session?.user.id}`)
      .then((newData) => newData.json())
      .then((data) => {
        isForm = data;
        localStorage.setItem("isForm", JSON.stringify(data));
      });
    if (!isForm) 
      Router.push("/login/form");
   
  }, []);

  return (
    <div
      className='bg-cover bg-center h-screen w-screen '
      style={{
        backgroundImage: `url("/images/loginbg.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='flex items-center justify-center h-screen w-screen  bg-gray-800 bg-opacity-30 px-3'>
        <LoginPage />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
