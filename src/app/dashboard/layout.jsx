import Link from "next/link";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-5">
        <Link href={'/dashboard'} className="text-2xl font-bold mb-8">
          Dashboard
        </Link>

        <nav className="space-y-3">
          <Link
            href="/dashboard/add-story"
            className="block p-3 rounded-lg hover:bg-slate-700"
          >
            ➕ Add Story
          </Link>

          <Link
            href="/dashboard/my-profile"
            className="block p-3 rounded-lg hover:bg-slate-700"
          >
            👤 My Profile
          </Link>

          <Link
            href="/dashboard/dashboard-settings"
            className="block p-3 rounded-lg hover:bg-slate-700"
          >
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1  p-8">
        <div className="p-6 rounded-xl shadow-md">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;