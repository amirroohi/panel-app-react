import { useState } from "react";
import ProjectTable from "../features/projects/ProjectTable";
import {  HiOutlinePlus } from "react-icons/hi";
import Modal from "../ui/Modal";
import CreateProjectForm from "../features/projects/CreateProjectForm";

function Projects() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-8">
        <h1 className="text-xl font-bold">پروژه های شما</h1>
        <>
          <button
            onClick={() => {
              setIsCreateOpen(true);
            }}
            className="btn btn--primary flex items-center justify-between"
          >
            <span className="ml-2">
              <HiOutlinePlus />
            </span>
            <span>افزودن پروژه</span>
          </button>
          <Modal
            title={"پروژه جدید"}
            open={isCreateOpen}
            onClose={() => setIsCreateOpen(false)}
          >
            <CreateProjectForm />
          </Modal>
        </>
      </div>

      <ProjectTable />
    </div>
  );
}
export default Projects;
