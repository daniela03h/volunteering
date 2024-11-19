import React from "react";
import { IoClose } from 'react-icons/io5';

interface IProps{
  children: React.ReactNode;
  propFunction : ()=> void
}

export const Modal:React.FC<IProps> = ({children, propFunction}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50 p-10 flex items-center justify-center">
        <div className="relative w-full min-w-[300px] max-w-[800px] max-h-[calc(100vh-80px)] h-auto overflow-y-auto mx-auto bg-white rounded-lg p-12 flex flex-col gap-10">
          <button className="absolute top-4 right-4 border-none bg-transparent text-black text-3xl cursor-pointer" onClick={propFunction}><IoClose /></button>
            {children}
        </div>
    </div>
  )
}