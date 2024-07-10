import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();


  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      //    when the element(project) has been added,
      //   for adding from ui component, should be
      //   use invalidateQuery from useQueryClient
      //   then refresh the changes

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isCreating, createProposal };
}
