import { saveDrafts, loadDrafts, clearDrafts } from "../DraftStorageHelper";

describe("DraftStorageHelper", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and load drafts", () => {
    const drafts = [{ id: 1, name: "Test Draft", content: "Draft content" }];
    saveDrafts(drafts);

    const loaded = loadDrafts();
    expect(loaded).toEqual(drafts);
  });

  it("should clear drafts", () => {
    const drafts = [{ id: 1, name: "Test", content: "Test content" }];
    saveDrafts(drafts);

    clearDrafts();
    expect(loadDrafts()).toEqual([]);
  });
});
