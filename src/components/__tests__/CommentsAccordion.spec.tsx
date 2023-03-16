import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommentsAccordion from "../CommentsAccordion";

jest.mock("../CommentList", () => "mock-comment-list");

describe("CommentsAccordion", () => {
  describe("not cached video", () => {
    beforeEach(() => {
      render(
        <CommentsAccordion
          videoDetails={{
            id: "12345",
            title: "Mock Video Title",
            comments: [],
          }}
        />
      );
    });

    it("should display video title", () => {
      const videoTitle = screen.getByRole("heading", {
        name: /Mock Video Title/i,
      });

      expect(videoTitle).toBeInTheDocument();
    });

    it("should not display alert that video is cached", () => {
      const cachedAlert = screen.queryByText(
        "This is a cached result from MongoDB"
      );

      expect(cachedAlert).not.toBeInTheDocument();
    });
  });

  describe("cached video", () => {
    beforeEach(() => {
      render(
        <CommentsAccordion
          videoDetails={{
            id: "12345",
            title: "Mock Video Title",
            comments: [],
            cached: true,
          }}
        />
      );
    });

    it("should display video title", () => {
      const videoTitle = screen.getByRole("heading", {
        name: /Mock Video Title/i,
      });

      expect(videoTitle).toBeInTheDocument();
    });

    it("should display alert that video is cached", () => {
      const cachedAlert = screen.getByText(
        /This is a cached result from MongoDB/i
      );

      expect(cachedAlert).toBeInTheDocument();
    });
  });
});
