import ProposalsTable from "../features/proposals/ProposalsTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
        درخواست های شما
      </h1>
      <ProposalsTable />
    </div>
  );
}
export default Proposals;
