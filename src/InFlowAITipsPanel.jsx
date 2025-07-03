import React, { useEffect, useState } from "react";

const tipsByPersona = {
  Student: [
    "Start with action verbs when describing projects.",
    "Keep your tone professional but approachable.",
    "Highlight achievements, not just responsibilities.",
  ],
  "Career Coach": [
    "Encourage concise but compelling summaries.",
    "Focus on transferable skills.",
  ],
  Employer: [
    "Keep job posts concise and engaging.",
    "Focus on essential qualifications.",
  ],
  Admin: [
    "Maintain a clear and formal tone.",
    "Include relevant keywords for SEO.",
  ],
};

export default function InFlowAITipsPanel({ contentType, tone, persona }) {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const tips = tipsByPersona[persona] || ["Focus on clarity and relevance."];
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, [persona]);

  return (
    <div className="bg-blue-50 p-2 rounded text-sm">
      ✨ Tip for {persona}: {tip}
    </div>
  );
}
