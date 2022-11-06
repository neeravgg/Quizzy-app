import React from "react";
import { useFormContext } from "react-hook-form";

export default function Field(props) {
  const {register } = useFormContext();
 
  return (
    <div className=' relative '>
      <div className='my-2 flex p-1'>
        <input
          type={props.type}
          id={props.name} 
          placeholder={props.placeholder}
          {...register(props.name )} 
          className={` rounded-2xl border-transparent flex-1 appearance-none border-2  w-full py-2 px-4 bg-skin-base text-skin-base dark:bg-black dark:theme-dark placeholder-gray-400 shadow-md   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder:italic `}
        />
  

      </div>
      
    </div>
  );
}
