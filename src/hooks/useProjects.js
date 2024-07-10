import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";

export default function useProjects() {
  useLocation()




  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
