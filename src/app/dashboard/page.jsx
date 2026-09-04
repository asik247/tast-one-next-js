import Title from "@/components/Title/Title";
import React from "react";

const DashBoard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
        <Title>Welcome to Dashboard 👋</Title>
        <p className="mt-3 text-lg">
          Manage your stories, profile, and settings from one place.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Total Stories</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">25</p>
        </div>

        <div className=" p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Profile Views</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">1,245</p>
        </div>

        <div className=" p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Settings Updated</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">12</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className=" p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary">
            ➕ Add Story
          </button>

          <button className="btn btn-secondary">
            👤 Edit Profile
          </button>

          <button className="btn btn-accent">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;