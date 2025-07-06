import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8 flex-1 bg-gray-50">
          <h1 className="text-3xl font-bold mb-4">Dashboard Content</h1>
          <p>This is where your files and folders will be displayed.</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
