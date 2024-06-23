import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";

import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./UseOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(isLoading, projects);

  if (isLoading) return <Loading />;
  if (projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>مهلت</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}
export default ProjectTable;
