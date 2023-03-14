import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import TestContext from "../context/TestContext";

export default function LogoutALert() {
  const { logoutAlert, setlogoutAlert } = useContext(TestContext);
  function closeModal() {
    setlogoutAlert(false);
  }

  return (
    <>
      <Transition appear show={logoutAlert} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-skin-base dark:theme-dark px-6 py-4 text-left align-middle shadow-xl transition-all '>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl font-medium leading-6 text-skin-base  text-center'
                  >
                    Logout?
                  </Dialog.Title>
                  <hr className='mt-3' />
                  <div className='mt-5'>
                    <p className='text-sm text-skin-muted text-center'>
                      Do you want to logout from your account?
                    </p>
                  </div>

                  <div className='mt-7 px-1 sm:px-8 flex justify-between dark:theme-dark'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-2xl border border-transparent bg-blue-100 hover:bg-blue-200 dark:bg-skin-gold  dark:hover:bg-skin-gold-hover px-4 py-2 text-sm font-medium text-blue-900 dark:text-skin-base  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModal();
                        signOut();
                      }}
                    >
                      Yes, Logout
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-2xl border border-transparent bg-skin-btn-mt hover:bg-skin-btn-mt-hover px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 '
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
