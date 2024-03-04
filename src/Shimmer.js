import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((n, i) => (
      <div className="w-[250px] bg-white drop-shadow-md rounded-lg m-3 p-2 border border-black">
        <div className="animate-pulse w-full h-48 bg-slate-200"></div>
        <div className="p-3 space-y-4">
          <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
          <div className="flex space-x-4">
            <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
            <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
            <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
          </div>
          <div className="space-y-2">
            <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
            <div className="animate-pulse w-full h-3 bg-slate-200"></div>
            <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
          </div>
        </div>
      </div>
    ));
};

export default Shimmer;
