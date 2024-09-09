import React from 'react';

const DashboardLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading Dashboard...</p>
    </div>
  );
};

export default DashboardLoader;
