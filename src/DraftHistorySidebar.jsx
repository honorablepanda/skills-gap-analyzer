import React from "react";

export default function DraftHistorySidebar({ drafts, setDrafts, setOutput }) {
  const handleLoad = (draft) => {
    setOutput(draft.content);
  };

  const handleDelete = (id) => {
    const updated = drafts.filter((d) => d.id !== id);
    setDrafts(updated);
  };

  return (
    <div className="bg-gray-100 p-2 rounded text-sm">
      <h3 className="font-semibold mb-2">Your Saved Drafts</h3>
      {drafts.length === 0 ? (
        <p>No drafts saved yet.</p>
      ) : (
        <ul className="space-y-1">
          {drafts.map((draft) => (
            <li key={draft.id} className="border p-1 rounded flex justify-between items-center">
              <span>{draft.name}</span>
              <div className="space-x-2">
                <button
                  className="text-blue-600 text-xs"
                  onClick={() => handleLoad(draft)}
                >
                  Load
                </button>
                <button
                  className="text-red-600 text-xs"
                  onClick={() => handleDelete(draft.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
