import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
        لیست کاربران
      </h1>
      <UsersTable />
    </div>
  );
}
export default Users;
