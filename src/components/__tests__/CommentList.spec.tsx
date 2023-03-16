import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as MockDate from "mockdate";
import CommentList from "../CommentList";

describe("CommentList", () => {
  describe("no comments available", () => {
    it("should display paragraph with 'No comments'", () => {
      render(<CommentList comments={[]} />);

      const noComments = screen.getByText(/No comments/i);

      expect(noComments).toBeInTheDocument();
    });
  });

  describe("two comments available", () => {
    beforeEach(() => {
      MockDate.set("2023-03-16T11:12:00.000Z");

      render(
        <CommentList
          comments={[
            {
              id: "11111",
              comment: "first thingy thing",
              author: {
                name: "First Commentor",
                imageUrl: "first.jpg",
                channelUrl: "first.url",
              },
              likeCount: 1,
              publishedAt: "2023-03-16T11:11:00.000Z",
            },
            {
              id: "22222",
              comment: "Second thingy thing",
              author: {
                name: "Second Commentor",
                imageUrl: "second.jpg",
                channelUrl: "second.url",
              },
              likeCount: 1,
              publishedAt: "2023-03-16T11:10:00.000Z",
            },
          ]}
        />
      );
    });

    it("should display first comment's avatars", () => {
      const avatar = screen.getByRole("img", {
        name: /First Commentor/i,
      });

      expect(avatar).toBeInTheDocument();
    });

    it("should display second comment's avatars", () => {
      const avatar = screen.getByRole("img", {
        name: /Second Commentor/i,
      });

      expect(avatar).toBeInTheDocument();
    });

    it("should display first comment's author name", () => {
      const avatar = screen.getByRole("heading", {
        name: /First Commentor/i,
      });

      expect(avatar).toBeInTheDocument();
    });

    it("should display second comment's author name", () => {
      const avatar = screen.getByRole("heading", {
        name: /Second Commentor/i,
      });

      expect(avatar).toBeInTheDocument();
    });

    it("should display first comment", () => {
      const comment = screen.getByText(/first thingy thing/i);

      expect(comment).toBeInTheDocument();
    });

    it("should display first comment", () => {
      const comment = screen.getByText(/second thingy thing/i);

      expect(comment).toBeInTheDocument();
    });
  });
});
