import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  console.log(queryClient);

  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="وضعیت"
          register={register}
          options={options}
          required
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ChangeProposalStatus;
