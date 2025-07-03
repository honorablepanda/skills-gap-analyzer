import { render, screen } from "@testing-library/react";
import OutputAnalyticsPanel from "../OutputAnalyticsPanel";

describe("OutputAnalyticsPanel", () => {
  it("shows correct word count", () => {
    render(<OutputAnalyticsPanel output="This is a test sentence." />);
    expect(screen.getByText(/5 words/i)).toBeInTheDocument();
  });

  it("shows placeholders when no output", () => {
    render(<OutputAnalyticsPanel output="" />);
    expect(screen.getByText(/0 words/i)).toBeInTheDocument();
  });
});
