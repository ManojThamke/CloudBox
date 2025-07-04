const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-purple-700">CloudBox</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Secure storage for your files with easy sharing and advanced file management.
        </p>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700">
          Sign Up / Drop
        </button>
      </header>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Upload Files</h3>
          <p className="text-gray-600">Quickly upload your documents, images, or videos.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Enhanced Admin</h3>
          <p className="text-gray-600">Manage users and files with powerful admin controls.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Manage Trash</h3>
          <p className="text-gray-600">Restore or permanently delete files in your trash bin.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CloudBox. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
