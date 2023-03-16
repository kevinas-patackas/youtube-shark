import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const onSearchMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("submitting empty form", () => {
    beforeEach(() => {
      render(<SearchForm onSearch={onSearchMock} loading={false} />);
    });

    it("should not call onSearch", async () => {
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      await waitFor(() => {
        fireEvent.click(submitButton);
        expect(onSearchMock).not.toHaveBeenCalled();
      });
    });

    it("should display helper text that this field is required", async () => {
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      await waitFor(() => {
        fireEvent.click(submitButton);
        expect(screen.getByText("This is required")).toBeInTheDocument();
      });
    });
  });

  describe("submitting form with only spaces and commas in input field", () => {
    beforeEach(() => {
      render(<SearchForm onSearch={onSearchMock} loading={false} />);
    });

    it("should not call onSearch", async () => {
      const searchField = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      await waitFor(() => {
        fireEvent.input(searchField, { target: { value: "  ,   ," } });
        fireEvent.click(submitButton);
        expect(onSearchMock).not.toHaveBeenCalled();
      });
    });

    it("should display helper text that empty spaces will not work", async () => {
      const searchField = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      await waitFor(() => {
        fireEvent.input(searchField, { target: { value: "  ,   ," } });
        fireEvent.click(submitButton);
        expect(
          screen.getByText("Empty spaces will not work ;)")
        ).toBeInTheDocument();
      });
    });
  });

  describe("submitting form valid value", () => {
    beforeEach(() => {
      render(<SearchForm onSearch={onSearchMock} loading={false} />);
    });

    it("should call onSearch", async () => {
      const searchField = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      await waitFor(() => {
        fireEvent.input(searchField, { target: { value: "1111, 2222  3333" } });
        fireEvent.click(submitButton);
        expect(onSearchMock).toHaveBeenCalledWith(["1111", "2222", "3333"]);
      });
    });
  });

  describe("loading prop is set to true", () => {
    beforeEach(() => {
      render(<SearchForm onSearch={onSearchMock} loading={true} />);
    });

    it("should have submit button disabled", async () => {
      const submitButton = screen.getByRole("button", {
        name: /Surf Comments!/i,
      });

      expect(submitButton).toHaveAttribute("disabled");
    });
  });
});
