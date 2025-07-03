import { render, screen, fireEvent } from "@testing-library/react";
import ComingSoonModal from "../ComingSoonModal";

describe("ComingSoonModal", () => {
  it("renders and triggers onClose", () => {
    const onCloseMock = jest.fn();
    render(<ComingSoonModal onClose={onCloseMock} />);

    expect(screen.getByText(/Coming Soon!/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Close/i));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
