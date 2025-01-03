import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Welcome to ShopHub</h1>
      <p className="text-gray-600 mb-8">Discover our amazing products and offers!</p>
      <a
        href="/login"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Start Shopping
      </a>
    </div>
  );
};

export default LandingPage;