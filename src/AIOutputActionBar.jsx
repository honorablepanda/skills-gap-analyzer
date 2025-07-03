import React from "react";

export default function AIOutputActionBar({ onGenerate, disabled, onComingSoon }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onGenerate}
        disabled={disabled}
        className={`px-4 py-2 rounded text-white ${disabled ? "bg-gray-400" : "bg-blue-600"}`}
      >
        Generate
      </button>
      <button
        className="px-4 py-2 rounded bg-green-600 text-white"
        onClick={onComingSoon}
      >
        Rephrase
      </button>
      <button
        className="px-4 py-2 rounded bg-purple-600 text-white"
        onClick={onComingSoon}
      >
        Summarize
      </button>
    </div>
  );
}
