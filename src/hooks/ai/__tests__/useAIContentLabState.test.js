import { renderHook, act } from "@testing-library/react";
import { useAIContentLabState } from "../useAIContentLabState";

describe("useAIContentLabState", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useAIContentLabState());

    expect(result.current.prompt).toBe("");
    expect(result.current.status).toBe("idle");
    expect(result.current.contentType).toBe("LinkedIn Post");
  });

  it("should update prompt state", () => {
    const { result } = renderHook(() => useAIContentLabState());

    act(() => {
      result.current.setPrompt("Test prompt");
    });

    expect(result.current.prompt).toBe("Test prompt");
  });
});
