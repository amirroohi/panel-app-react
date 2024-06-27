import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      //    when the element(project) has been deleted,
      //   for deleting from ui component, should be
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
  return { isDeleting, removeProject };
}
