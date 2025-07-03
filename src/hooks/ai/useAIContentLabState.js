import { useState } from "react";

export function useAIContentLabState() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [contentType, setContentType] = useState("LinkedIn Post");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [persona, setPersona] = useState("Student");
  const [drafts, setDrafts] = useState([]);

  return {
    prompt, setPrompt,
    output, setOutput,
    status, setStatus,
    contentType, setContentType,
    tone, setTone,
    length, setLength,
    persona, setPersona,
    drafts, setDrafts,
  };
}
