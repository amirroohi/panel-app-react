import Table from "../../ui/Table";
import {
  toPersianNumber,
  toPersianNumbersWithCammas,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function ProposalRow({ proposal, index }) {
  const { status, description, duration, price } = proposal;
  return (
    <Table.Row>
      <td>{++index}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{toPersianNumber(duration)} روز</td> 
      <td>{toPersianNumbersWithCammas(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
