const DRAFTS_KEY = "aiContentLabDrafts";

export function saveDrafts(drafts) {
  localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
}

export function loadDrafts() {
  const stored = localStorage.getItem(DRAFTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function clearDrafts() {
  localStorage.removeItem(DRAFTS_KEY);
}
