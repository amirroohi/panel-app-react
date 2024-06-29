import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProjectApi } from "../../services/projectService";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      //    when the element(project) has been added,
      //   for adding from ui component, should be
      //   use invalidateQuery from useQueryClient
      //   then refresh the changes
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isCreating, createProject };
}
