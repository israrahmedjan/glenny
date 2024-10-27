import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <div className="loading-container h-screen flex items-center justify-center">
        <div className="flex items-center flex-col justify-center gap-3 min-h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-primary h-20 w-20"></div>
          <h1 className="text-yellow-700 font-bold text-[15px]">Loading</h1>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
