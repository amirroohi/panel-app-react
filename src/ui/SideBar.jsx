import { Children } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="row-start-1 row-span-2 border-l py-6 px-8">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

function CustomNavLink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-primary-100/50 text-primary-900 ${navlinkClass}`
          : `text-secondary-600 ${navlinkClass}`
      }
    >
      {children}
    </NavLink>
  );
}
