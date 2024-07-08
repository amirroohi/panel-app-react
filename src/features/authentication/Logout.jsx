import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button className="flex items-center" onClick={logout}>
      <HiOutlineLogout className="w-5 h-5 text-primary-900" />
    </button>
  );
}
export default Logout;
