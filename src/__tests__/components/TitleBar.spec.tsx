import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TitleBar from "../../components/TitleBar";

describe("TitleBar", () => {
  it("should display given title", () => {
    render(<TitleBar title="Some expected title" />);

    const title = screen.getByRole("heading", {
      name: /Some expected title/i,
    });

    expect(title).toBeInTheDocument();
  });
});
