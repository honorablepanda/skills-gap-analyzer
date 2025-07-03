import React from "react";

export default function MockedAIStatusBanner({ status }) {
  let text = "";
  let style = "p-2 rounded";

  switch (status) {
    case "loading":
      text = "⏳ Generating content...";
      style += " bg-yellow-100";
      break;
    case "success":
      text = "✅ AI content ready!";
      style += " bg-green-100";
      break;
    case "error":
      text = "❌ Something went wrong. Please try again.";
      style += " bg-red-100";
      break;
    default:
      return null;
  }

  return <div className={style}>{text}</div>;
}
