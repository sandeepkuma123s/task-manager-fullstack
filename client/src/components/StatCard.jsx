function StatCard({ title, value, icon: Icon, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} text-white p-6 rounded-3xl shadow-xl`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white/80 font-medium">{title}</p>
          <h2 className="text-4xl font-extrabold mt-2">{value}</h2>
        </div>

        <div className="bg-white/20 p-3 rounded-2xl">
          <Icon size={32} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;