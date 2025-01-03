import React from 'react';
import Sidebar from '../../components/admin/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h1>
          <p className="text-lg text-gray-700">Manage your products, orders, and settings from here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;