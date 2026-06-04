import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ListTodo,
  Bell,
  Trash2,
  Edit,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProfileCard from "../components/ProfileCard";
import CalendarBox from "../components/Calendar";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskApi,
} from "../api/taskApi";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;

    try {
      if (editId) {
        await updateTask(editId, {
          title: task,
          priority,
          dueDate: dueDate || "No Due Date",
        });
        setEditId(null);
      } else {
        await createTask({
          title: task,
          priority,
          dueDate: dueDate || "No Due Date",
          status: "Pending",
        });
      }

      setTask("");
      setPriority("Medium");
      setDueDate("");
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskApi(id);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id) => {
    try {
      await updateTask(id, { status: "Completed" });
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (item) => {
    setTask(item.title);
    setPriority(item.priority);
    setDueDate(item.dueDate === "No Due Date" ? "" : item.dueDate);
    setEditId(item._id);
  };

  const filteredTasks = tasks.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || item.status === filter;
    return matchSearch && matchFilter;
  });

  const total = tasks.length;
  const completed = tasks.filter((item) => item.status === "Completed").length;
  const pending = tasks.filter((item) => item.status === "Pending").length;
  const overdue = tasks.filter((item) => item.status === "Overdue").length;

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-5 md:p-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-5 items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back,{" "}
              {JSON.parse(localStorage.getItem("user"))?.name}! Manage your
              tasks and productivity here.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="bg-white p-3 rounded-2xl border shadow-sm">
              <Bell className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Tasks"
            value={total}
            icon={ListTodo}
            gradient="from-blue-600 to-blue-400"
          />

          <StatCard
            title="Completed"
            value={completed}
            icon={CheckCircle}
            gradient="from-green-600 to-emerald-400"
          />

          <StatCard
            title="Pending"
            value={pending}
            icon={Clock}
            gradient="from-purple-600 to-indigo-400"
          />

          <StatCard
            title="Overdue"
            value={overdue}
            icon={AlertCircle}
            gradient="from-red-600 to-pink-400"
          />
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <section className="xl:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-extrabold">
                {editId ? "Update Task" : "Create & Track Tasks"}
              </h2>

              <p className="text-blue-100 mt-2">
                Add tasks, choose priority, set due dates, and track progress.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-white/20 px-4 py-2 rounded-xl">
                  🚀 Productivity
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-xl">
                  📅 Planning
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-xl">
                  ✅ Task Tracking
                </span>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Enter new task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="bg-white text-gray-800 rounded-2xl px-5 py-3 focus:outline-none"
                />

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="bg-white text-gray-800 rounded-2xl px-5 py-3 focus:outline-none"
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="bg-white text-gray-800 rounded-2xl px-5 py-3 focus:outline-none"
                />
              </div>

              <button
                onClick={addTask}
                className="mt-5 bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl transition"
              >
                <Plus size={20} />
                {editId ? "Update Task" : "Add Task"}
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-md border overflow-hidden">
              <div className="p-6 border-b flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>

                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border rounded-xl px-4 py-2 focus:outline-none"
                >
                  <option>All</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
              </div>

              {filteredTasks.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                  No tasks available. Add your first task above.
                </div>
              ) : (
                <div className="divide-y">
                  {filteredTasks.map((item) => (
                    <div
                      key={item._id}
                      className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50"
                    >
                      <div>
                        <h3
                          className={`text-lg font-bold ${
                            item.status === "Completed"
                              ? "line-through text-gray-400"
                              : "text-gray-800"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Due: {item.dueDate || "No Due Date"}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            item.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : item.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.status}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            item.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : item.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.priority}
                        </span>

                        <button
                          onClick={() => completeTask(item._id)}
                          className="text-green-600 font-bold"
                        >
                          Complete
                        </button>

                        <button
                          onClick={() => editTask(item)}
                          className="text-blue-600 font-bold flex items-center gap-1"
                        >
                          <Edit size={16} />
                          Edit
                        </button>

                        <button
                          onClick={() => deleteTask(item._id)}
                          className="text-red-600 font-bold flex items-center gap-1"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <ProfileCard />
            <CalendarBox />

            <div className="bg-white rounded-3xl shadow-md border p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Weekly Overview
              </h3>

              <div className="space-y-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
                  <div key={day}>
                    <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1">
                      <span>{day}</span>
                      <span>{(index + 2) * 15}%</span>
                    </div>

                    <div className="h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        style={{ width: `${(index + 2) * 15}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;