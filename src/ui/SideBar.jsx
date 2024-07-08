function SideBar({ children }) {
  return (
    <div className="row-start-1 row-span-2 border-l py-6 px-8 bg-secondary-300">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
export default SideBar;
