import React from "react";
import { IoClose } from 'react-icons/io5';

interface IProps{
  children: React.ReactNode;
  propFunction : ()=> void
}

export const Modal:React.FC<IProps> = ({children, propFunction}) => {
  return (
    <div>
        <div>
          <button onClick={propFunction}><IoClose /></button>
            {children}
        </div>
    </div>
  )
}