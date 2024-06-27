import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithCammas } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
// import CreateProjectForm from "./CreateProjectForm";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();

  return (
    <Table.Row key={project._id}>
      <td>{++index}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithCammas(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex gap-x-2">
          <>
            <button
              onClick={() => {
                setIsEditOpen(true);
              }}
            >
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش «${project.title}»`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              در حال بروز رسانی...
              {/* <CreateProjectForm /> */}
            </Modal>
          </>
          <>
            <button
              onClick={() => {
                setIsDeleteOpen(true);
              }}
            >
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف «${project.title}»`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                disabled={false}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
