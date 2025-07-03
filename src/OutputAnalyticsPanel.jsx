import React from "react";

export default function OutputAnalyticsPanel({ output }) {
  const wordCount = output ? output.trim().split(/\s+/).length : 0;

  // Mock tone and sentiment for now
  const mockTone = wordCount > 0 ? "Friendly" : "-";
  const mockSentiment = wordCount > 0 ? "Positive" : "-";

  return (
    <div className="bg-purple-50 p-2 rounded text-sm mt-2">
      <p>📊 Word Count: {wordCount} words</p>
      <p>🗣️ Detected Tone: {mockTone}</p>
      <p>😊 Sentiment: {mockSentiment}</p>
    </div>
  );
}
