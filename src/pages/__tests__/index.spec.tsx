import { useFetchVideoComments } from "@/hooks/useFetchVideoComments";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../index";

jest.mock("../../hooks/useFetchVideoComments", () => {
  return {
    useFetchVideoComments: jest.fn(),
  };
});

describe("Home", () => {
  const useFetchVideoCommentsMock = useFetchVideoComments as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("error state", () => {
    describe("error occurred", () => {
      beforeEach(() => {
        useFetchVideoCommentsMock.mockImplementationOnce(() => ({
          error: true,
          loading: false,
          videos: [],
          notFoundVideos: [],
          fetchVideoComments: jest.fn(),
        }));
      });
      it("should display error alert", () => {
        render(<Home />);

        const errorText = screen.queryByText(
          "Something went wrong, please try again"
        );

        expect(errorText).toBeInTheDocument();
      });
    });

    describe("no error", () => {
      beforeEach(() => {
        useFetchVideoCommentsMock.mockImplementationOnce(() => ({
          error: false,
          loading: false,
          videos: [],
          notFoundVideos: [],
          fetchVideoComments: jest.fn(),
        }));
      });
      it("should not display error alert", () => {
        render(<Home />);

        const errorText = screen.queryByText(
          "Something went wrong, please try again"
        );

        expect(errorText).not.toBeInTheDocument();
      });
    });
  });

  describe("not found videos", () => {
    describe("there are no not found videos", () => {
      beforeEach(() => {
        useFetchVideoCommentsMock.mockImplementationOnce(() => ({
          error: false,
          loading: false,
          videos: [],
          notFoundVideos: ["1111", "2222"],
          fetchVideoComments: jest.fn(),
        }));
      });
      it("should display no videos found alert", () => {
        render(<Home />);

        const errorText = screen.queryByText(
          "No videos found with IDs: 1111, 2222"
        );

        expect(errorText).not.toBeInTheDocument();
      });
    });

    describe("there are no not found videos", () => {
      beforeEach(() => {
        useFetchVideoCommentsMock.mockImplementationOnce(() => ({
          error: false,
          loading: false,
          videos: [],
          notFoundVideos: [],
          fetchVideoComments: jest.fn(),
        }));
      });
      it("should not display no videos found alert", () => {
        render(<Home />);

        const notFoundVideosText = screen.queryByText(
          "No videos found with IDs"
        );

        expect(notFoundVideosText).not.toBeInTheDocument();
      });
    });
  });

  describe("videos available", () => {
    beforeEach(() => {
      useFetchVideoCommentsMock.mockImplementationOnce(() => ({
        error: false,
        loading: false,
        videos: [
          {
            id: "1111",
            title: "first video title",
            comments: [],
          },
          {
            id: "2222",
            title: "second video title",
            comments: [],
          },
        ],
        notFoundVideos: [],
        fetchVideoComments: jest.fn(),
      }));
    });
    it("should display all videos", () => {
      render(<Home />);

      const firstVideoTitle = screen.queryByText("first video title");
      const secondVideoTitle = screen.queryByText("second video title");

      expect(firstVideoTitle).toBeInTheDocument();
      expect(secondVideoTitle).toBeInTheDocument();
    });
  });
});
