import {
  HiCollection,
  HiHome,
  HiUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="users">
          <HiUsers />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}
export default AdminLayout;
