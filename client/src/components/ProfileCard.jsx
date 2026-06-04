import { User } from "lucide-react";

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-3xl shadow-md border p-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <div>
          <h3 className="font-bold text-gray-800">
            {user?.name || "User"}
          </h3>

          <p className="text-sm text-gray-500">
            {user?.email || "user@example.com"}
          </p>
        </div>
      </div>

      <div className="mt-5 bg-slate-50 rounded-2xl p-4">
        <p className="text-sm text-gray-500">Today Progress</p>

        <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full w-[70%]"></div>
        </div>

        <p className="text-sm font-bold text-gray-700 mt-2">
          Tasks Managed Successfully
        </p>
      </div>

      <div className="mt-5 border-t pt-4">
        <div className="flex items-center gap-2 text-gray-600">
          <User size={18} />
          <span className="text-sm">
            Logged In User
          </span>
        </div>

        <p className="mt-2 text-xs text-gray-500 break-all">
          {user?.email}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;