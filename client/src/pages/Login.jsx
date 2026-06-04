import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipboardCheck } from "lucide-react";
import { loginUser } from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br from-blue-600 to-purple-700">
          <ClipboardCheck size={60} />
          <h1 className="text-4xl font-extrabold mt-6">Welcome Back</h1>
          <p className="mt-4 text-blue-100">
            Login to manage your tasks, priorities, and productivity dashboard.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="text-gray-500 mt-2">Continue to TaskFlow</p>

          {message && (
            <p className="mt-4 text-center font-semibold text-blue-600">
              {message}
            </p>
          )}

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              type="password"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-bold"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;