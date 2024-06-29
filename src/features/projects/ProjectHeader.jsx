import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { useState } from "react";

function ProjectHeader() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <h1 className="text-xl font-bold">پروژه های شما</h1>
      <Modal
        title={"پروژه جدید"}
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      >
        <CreateProjectForm
          onClose={() => {
            setIsCreateOpen(false);
          }}
        />
      </Modal>
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
    </div>
  );
}
export default ProjectHeader;
