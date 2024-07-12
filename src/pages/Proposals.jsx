import ProposalsTable from "../features/proposals/ProposalsTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
        لیست درخواست های ثبت شده
      </h1>
      <ProposalsTable />
    </div>
  );
}
export default Proposals;
