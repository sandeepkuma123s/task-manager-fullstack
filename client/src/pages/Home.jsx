import { Link } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  ListTodo,
  ShieldCheck,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-semibold">
              Full Stack Task Management App
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
              Plan smarter. Work faster. Track everything.
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Manage daily tasks, priorities, deadlines, and progress with a
              clean full-stack task management dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                to="/dashboard"
                className="bg-blue-500/30 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Task dashboard"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 grid md:grid-cols-4 gap-6">
        {[
          { value: "120+", label: "Tasks Managed" },
          { value: "35+", label: "Projects Tracked" },
          { value: "98%", label: "Productivity Focus" },
          { value: "24/7", label: "Access Anywhere" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-extrabold text-blue-700">{stat.value}</h3>
            <p className="text-gray-500 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Today&apos;s Priority Tasks
          </h3>

          {[
            ["Complete UI Design", "High"],
            ["Connect Backend API", "Medium"],
            ["Add Authentication", "High"],
            ["Test Responsive Layout", "Low"],
          ].map(([task, priority], index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-50 p-4 rounded-xl mb-4 border hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                <span className="font-semibold text-gray-700">{task}</span>
              </div>

              <span
                className={`text-sm px-3 py-1 rounded-full font-semibold ${
                  priority === "High"
                    ? "bg-red-100 text-red-600"
                    : priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {priority}
              </span>
            </div>
          ))}
        </div>

        <div>
          <span className="text-blue-700 font-bold">WHY TASK MANAGER?</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
            Everything you need to manage work clearly.
          </h2>
          <p className="text-gray-600 mt-5 text-lg">
            This project includes authentication, task CRUD operations,
            priority tracking, due dates, and responsive UI design — perfect for
            internship submission.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-2xl">
              <BarChart3 className="text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-800">Progress Tracking</h4>
            </div>
            <div className="bg-purple-50 p-5 rounded-2xl">
              <Users className="text-purple-600 mb-3" />
              <h4 className="font-bold text-gray-800">User Friendly</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-6">
        {[
          { icon: ListTodo, title: "CRUD Tasks", text: "Create, edit, update, and delete tasks easily." },
          { icon: ShieldCheck, title: "Secure Auth", text: "JWT-based user authentication and protected routes." },
          { icon: Clock, title: "Due Dates", text: "Track deadlines and manage work priority." },
          { icon: CheckCircle, title: "Task Status", text: "Mark tasks as pending, active, or completed." },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-blue-700" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold">Ready to organize your work?</h2>
          <p className="mt-3 text-blue-100">
            Start managing your daily tasks with a beautiful dashboard.
          </p>

          <Link
            to="/dashboard"
            className="inline-block mt-6 bg-white text-blue-700 px-7 py-3 rounded-xl font-bold hover:shadow-xl"
          >
            Open Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;