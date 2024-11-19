import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { PiFoldersBold } from "react-icons/pi";

export const Aside = () => {
  return (
    <div className="w-1/6 border-2 ">
      <h1 className="text-xl text-center font-bold py-10">VolunteerConnect</h1>
      <div className="flex flex-col">
        <button className="flex items-center gap-2 pl-2 bg-gray-200 h-12"><PiFoldersBold />Proyectos</button>
        <button className="flex items-center gap-2 pl-2 h-12"><FaArrowRightToBracket />Cerrar Sesion</button>
      </div>
    </div>
  );
};
