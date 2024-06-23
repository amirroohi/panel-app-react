import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  console.log(data);
  return <div className="bg-secondary-300 py-4 px-8">app header</div>;
}
export default Header;
