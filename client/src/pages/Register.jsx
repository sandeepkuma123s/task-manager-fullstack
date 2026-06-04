import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { registerUser } from "../api/authApi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Registration successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br from-purple-600 to-blue-700">
          <UserPlus size={60} />
          <h1 className="text-4xl font-extrabold mt-6">Create Account</h1>
          <p className="mt-4 text-purple-100">
            Register and start tracking tasks with a professional dashboard.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Register
          </h2>

          <p className="text-gray-500 mt-2">
            Create your TaskFlow account
          </p>

          {message && (
            <p className="mt-4 text-center font-semibold text-blue-600">
              {message}
            </p>
          )}

          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              type="text"
              placeholder="Full Name"
              required
            />

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
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl font-bold"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;