"use client";

import React from 'react';
import SearchBar from './home/components/SearchBar';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      {/* Container for main content and blobs */}
      <div className="relative w-full max-w-6xl">
        {/* Blurry animated shapes */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#b3ffd6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#b3ffd6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#b3ffd6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Main content */}
        <div className="relative m-8 space-y-4 z-10">
          {/* Header section */}
          <header className="py-4 text-left">
            <h1 className="text-5xl font-bold text-gray-800">Recipe Chef</h1>
            <p className="mt-4 text-lg text-gray-500">Find the perfect recipe by ingredient, nutrition, and more!</p>
          </header>

          {/* Search bar */}
          <div className="w-full max-w-6xl z-10">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
