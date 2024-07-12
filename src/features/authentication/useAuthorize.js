import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  //   ---------First way----------
  //   if (pathname.includes("owner")) {
  //     if (user && user.role === "OWNER") isAuthorized = true;
  //   }
  //   if (pathname.includes("freelancer")) {
  //     if (user && user.role === "FREELANCER") isAuthorized = true;
  //   }
  //   if (pathname.includes("admin")) {
  //     if (user && user.role === "ADMIN") isAuthorized = true;
  //   }

  // ------------second way---------
  //   let desiredRole = pathname.split("/")[1];
  //   if (pathname.includes(desiredRole)) {
  //     if (user && user.role === desiredRole.toUpperCase()) isAuthorized = true;
  //   }

  //   ----------third way (better than other ways)----------
  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };
  let desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isLoading, user, isAuthenticated, isAuthorized, isVerified };
}
