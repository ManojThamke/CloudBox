const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white border-b p-4">
      <h3 className="text-xl font-semibold text-purple-700">Dashboard</h3>
      <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Upload
      </button>
    </div>
  );
};

export default Topbar;
