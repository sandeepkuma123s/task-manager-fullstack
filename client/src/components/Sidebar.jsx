import { Link, useNavigate } from "react-router-dom";
import {
  ClipboardCheck,
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-gradient-to-b from-blue-700 to-purple-800 text-white p-6 flex-col justify-between">
      <div>
        <Link to="/" className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <ClipboardCheck size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold">TaskFlow</h1>
            <p className="text-sm text-blue-100">Task Manager</p>
          </div>
        </Link>

        <div className="space-y-3">
          {[
            { icon: LayoutDashboard, text: "Dashboard" },
            { icon: ListTodo, text: "My Tasks" },
            { icon: CalendarDays, text: "Calendar" },
            { icon: BarChart3, text: "Reports" },
            { icon: Settings, text: "Settings" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                  index === 0
                    ? "bg-white text-blue-700 font-bold"
                    : "hover:bg-white/15"
                }`}
              >
                <Icon size={20} />
                {item.text}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-500/80 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;