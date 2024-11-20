import { BsFillFileBarGraphFill } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { PiFoldersBold } from "react-icons/pi";

interface IProps {
  analytics: {
    totalProjects: number;
    activeProjects: number;
    organizers: number;
    nextProject: Date | string | null;
  };
}
export const Cards = ({ analytics }: IProps) => {
  return (
    <div className="flex">
      <div className="w-80 px-6 py-6 mx-11 mt-11 h-32 shadow-md bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <p>Total Proyectos</p>
          <PiFoldersBold />
        </div>
        <p className="text-2xl font-bold pt-2">{analytics.totalProjects}</p>
      </div>

      <div className="w-80 px-6 py-6 mx-11 mt-11 h-32 shadow-md bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <p>Proyectos Activos</p>
          <BsFillFileBarGraphFill />
        </div>
        <p className="text-2xl font-bold pt-2">{analytics.activeProjects}</p>
      </div>

      <div className="w-80 px-6 py-6 mx-11 mt-11 h-32 shadow-md bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <p>Organizadores</p>
          <IoPerson />
        </div>
        <p className="text-2xl font-bold pt-2">{analytics.organizers}</p>
      </div>

      <div className="w-80 px-6 py-6 mx-11 mt-11 h-32 shadow-md bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <p>Próximo Proyecto</p>
          <CiCalendar />
        </div>
        <p className="text-2xl font-bold pt-2">{analytics.nextProject as string | null}</p>
      </div>
    </div>
  );
};
