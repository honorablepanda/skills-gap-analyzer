import React, { useState, useEffect } from "react";
import ContentTypeSelector from "./ContentTypeSelector";
import ToneSelector from "./ToneSelector";
import LengthSelector from "./LengthSelector";
import PersonaSelector from "./PersonaSelector";
import PromptInputBlock from "./PromptInputBlock";
import AIOutputEditor from "./AIOutputEditor";
import AIOutputActionBar from "./AIOutputActionBar";
import InFlowAITipsPanel from "./InFlowAITipsPanel";
import DraftHistorySidebar from "./DraftHistorySidebar";
import MockedAIStatusBanner from "./MockedAIStatusBanner";
import OutputAnalyticsPanel from "./OutputAnalyticsPanel";
import ComingSoonModal from "./ComingSoonModal";
import { useAIContentLabState } from "../../hooks/ai/useAIContentLabState";
import { useMockAIService } from "../../services/useMockAIService";
import { saveDrafts, loadDrafts } from "../../utils/DraftStorageHelper";

export default function AIContentLabDashboard() {
  const state = useAIContentLabState();
  const { generateContent } = useMockAIService();
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Load drafts from localStorage on first load
  useEffect(() => {
    state.setDrafts(loadDrafts());
  }, []);

  // Auto-save drafts to localStorage whenever drafts change
  useEffect(() => {
    saveDrafts(state.drafts);
  }, [state.drafts]);

  const handleGenerate = async () => {
    state.setStatus("loading");
    try {
      const generatedOutput = await generateContent(state.prompt, { tone: state.tone });
      state.setOutput(generatedOutput);
      state.setStatus("success");
    } catch (error) {
      state.setStatus("error");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">AI Content Lab</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContentTypeSelector value={state.contentType} onChange={state.setContentType} />
        <ToneSelector value={state.tone} onChange={state.setTone} />
        <LengthSelector value={state.length} onChange={state.setLength} />
        <PersonaSelector value={state.persona} onChange={state.setPersona} />
      </div>

      <PromptInputBlock value={state.prompt} onChange={state.setPrompt} />

      <AIOutputActionBar
        onGenerate={handleGenerate}
        disabled={state.status === "loading" || !state.prompt}
        onComingSoon={() => setShowComingSoon(true)}
      />

      <MockedAIStatusBanner status={state.status} />

      <AIOutputEditor output={state.output} setOutput={state.setOutput} />

      <InFlowAITipsPanel contentType={state.contentType} tone={state.tone} persona={state.persona} />

      <DraftHistorySidebar drafts={state.drafts} setDrafts={state.setDrafts} setOutput={state.setOutput} />

      <OutputAnalyticsPanel output={state.output} />

      {showComingSoon && <ComingSoonModal onClose={() => setShowComingSoon(false)} />}
    </div>
  );
}
