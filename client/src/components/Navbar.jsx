import { Link } from "react-router-dom";
import { ClipboardCheck, LayoutDashboard } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <ClipboardCheck className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 leading-none">
              TaskFlow
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Manage work smartly
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-100 transition"
          >
            Register
          </Link>

          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-xl transition flex items-center gap-2"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;