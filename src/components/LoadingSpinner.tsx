import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-75"></div>
        </div>
        <p className="text-white mt-4 font-medium">Loading AI Interview Platform...</p>
      </div>
    </div>
  );
}