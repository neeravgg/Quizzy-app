import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session } = useSession();
  const Router = useRouter();
  return (
    <div className='flex flex-col bg-white rounded-xl shadow-sm dark:bg-gray-700 w-full sm:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 md:px-8 lg:px-10 justify-center'>
      <div className=" text-center mt-5">
        <Image
          src='/images/logo.png'
          width={250}
          height={250}
          quality={100}
          alt='Nature Intake'
        />
      </div>

      <hr className='mt-4' />

      <div className='max-auto p-4 justify-center text-center'>
        {session ? (
          <div className='flex flex-col gap-2'>
            <button
              className={`mt-6 w-full px-4 py-2 tracking-wide shadow-md text-white transition-colors duration-200 transform bg-blue-500 rounded-xl hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
              onClick={() => {
                Router.push("/");
              }}
            >
              Go to Home
            </button>
            <span className='text-gray-500 dark:text-gray-300'>
              You are now Signed-in
            </span>
          </div>
        ) : (
          <div className='flex flex-col gap-2 '>
            {/* google */}
            <button
              className={`flex w-full mt-3  tracking-wide shadow-md text-white hover:scale-105 ransition duration-200  ease-in-out  antialiased   rounded-2xl justify-center items-center text-center`}
              onClick={() => {
                signIn();
              }}
            >
              <div className=' flex-2 bg-white h-14 w-3/12 sm:w-3/12 rounded-l-2xl  py-3 px-4 sm:px-4'>
                <img
                  src='/images/google.png'
                  alt='google logo'
                  className='w-8 h-8 '
                />
              </div>
              <span className='flex-1 justify-center w-full h-14 bg-red-500 rounded-r-2xl text-lg py-3 sm:px-4'>
                Sign in with Google
              </span>
            </button>
            {/* facebook */}
            <button
              className={`flex w-full mt-3  tracking-wide shadow-md text-white hover:scale-105 ransition duration-200  ease-in-out  antialiased   rounded-2xl justify-center items-center text-center `}
              onClick={() => {
                signIn();
              }}
            >
              <div className=' flex-2 bg-white h-14 w-3/12 sm:w-3/12 rounded-l-2xl  py-3 px-4 sm:px-4'>
                <img
                  src='/images/facebook.png'
                  alt='google logo'
                  className='w-9 h-9 '
                />
              </div>
              <span className='flex-1 justify-center w-full h-14 bg-blue-500 rounded-r-2xl text-lg py-3 sm:px-1'>
                Sign in with Facebook
              </span>
            </button>

            <span className='text-gray-500 dark:text-gray-300 pb-5'>
              Sign-up to access your account
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
