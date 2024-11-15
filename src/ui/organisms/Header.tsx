"use client";

import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "../atoms/Button";
import { Modal } from "../atoms/Modal";
import Account from "../molecules/Account";
import { ProjectsForm } from "./ProjectsForm";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => setModal(false);

  return (
    <header className="border-2 border-red flex justify-between items-center px-4">
      <h2 className="font-bold">Dashboard de proyectos</h2>
      <div className="flex gap-4">
          <Button text="Descargar reporte" icon={<IoDocumentTextOutline color="white" /> }/>
          <Button text="Nuevo Proyecto" onClick={() => setModal(true)} icon={<IoMdAddCircleOutline />}/>
          <Account />
        {modal && (
          <Modal propFunction={handleCloseModal}>
            <ProjectsForm action="add" propFunction={handleCloseModal} />
          </Modal>
        )}
      </div>
    </header>
  );
};
