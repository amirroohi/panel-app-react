import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { toPersianNumbersWithCammas } from "../../utils/toPersianNumbers";
import Stat from "../../ui/stat";

function Stats({ proposals, projects, users }) {

const usersDetail = users
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={numOfAcceptedProposals}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="کیف پول"
        value={toPersianNumbersWithCammas(balance)}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}
export default Stats;
