import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.body>
      </Table>
    </div>
  );
}
export default ProposalsTable;
