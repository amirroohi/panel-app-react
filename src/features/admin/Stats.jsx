import { HiCollection, HiUsers, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/stat";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
      <Stat
        color="yellow"
        title="کاربران"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}
export default Stats;
