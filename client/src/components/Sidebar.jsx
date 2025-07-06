import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-100 min-h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">CloudBox</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="text-purple-700 hover:underline">
          📁 My Files
        </Link>
        <Link to="/trash" className="text-purple-700 hover:underline">
          🗑️ Trash
        </Link>
        <Link to="/settings" className="text-purple-700 hover:underline">
          ⚙️ Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
