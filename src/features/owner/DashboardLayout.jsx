import DashboardHeader from "./DashboardHeader";
import Stats from "./stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
export default DashboardLayout;
