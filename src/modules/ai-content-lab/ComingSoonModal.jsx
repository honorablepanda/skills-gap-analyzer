import React from "react";

export default function ComingSoonModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-2">🚧 Coming Soon!</h2>
        <p>This feature will be available in a future update.</p>
        <button
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
