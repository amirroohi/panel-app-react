import useUser from "./useUser";

function UserAvatar() {
  const { isLoading, user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        src="/user.jpg"
        alt="user account image"
        className="w-7 h-7 rounded-full object-cover object-center "
      />
      <span>{user?.name}</span>
    </div>
  );
}
export default UserAvatar;
