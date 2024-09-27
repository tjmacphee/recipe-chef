"use client";

import React from 'react';
import SearchBar from './home/components/SearchBar';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>

      <header className="py-10 px-2 text-left w-full max-w-6xl z-10">
        <h1 className="text-5xl font-bold text-gray-800">Recipe Chef</h1>
        <p className="mt-4 text-lg text-gray-500">Find the perfect recipe by ingredient, nutrition, and more!</p>
      </header>
      <main className="w-full max-w-6xl z-10">
        <SearchBar />
      </main>
    </div>
  );
};

export default HomePage;
