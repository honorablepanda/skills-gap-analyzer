export function useMockAIService() {
  function generateContent(prompt, settings) {
    return new Promise((resolve, reject) => {
      const shouldFail = Math.random() < 0.2; // 20% error simulation
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Mock AI generation failed."));
        } else {
          resolve(`Generated mock content for: "${prompt}" with tone: ${settings.tone}`);
        }
      }, 1000);
    });
  }

  return { generateContent };
}
