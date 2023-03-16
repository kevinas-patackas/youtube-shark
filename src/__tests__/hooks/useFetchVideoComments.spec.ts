import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useFetchVideoComments } from "../../hooks/useFetchVideoComments";

describe("useFetchVideoComments", () => {
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("fetchVideoComments not called", () => {
    it("should have default values", () => {
      const { result } = renderHook(() => useFetchVideoComments());

      expect(result.current.loading).toEqual(false);
      expect(result.current.error).toEqual(false);
      expect(result.current.videos).toEqual([]);
      expect(result.current.notFoundVideos).toEqual([]);
    });
  });

  describe("fetchVideoComments resolves successfully", () => {
    beforeEach(() => {});

    it("should change loading from current state -> true -> false", async () => {
      const { result } = renderHook(() => useFetchVideoComments());

      fetchMock.mockImplementationOnce(
        () =>
          Promise.resolve({
            json: () =>
              Promise.resolve({
                items: [],
                notFound: [],
              }),
          }) as Promise<Response>
      );

      act(() => {
        result.current.fetchVideoComments(["1111", "2222"]);
      });

      await waitFor(() => {
        expect(result.current.loading).toEqual(true);
      });

      await waitFor(() => {
        expect(result.current.loading).toEqual(false);
      });
    });

    it("should change videos and notFoundVideos state", async () => {
      const { result } = renderHook(() => useFetchVideoComments());

      fetchMock.mockImplementationOnce(
        () =>
          Promise.resolve({
            json: () =>
              Promise.resolve({
                items: [
                  {
                    id: "1111",
                    title: "mock video title",
                    comments: [],
                  },
                ],
                notFound: ["2222"],
              }),
          }) as Promise<Response>
      );

      act(() => {
        result.current.fetchVideoComments(["1111", "2222"]);
      });

      await waitFor(() => {
        expect(result.current.videos).toEqual([
          {
            id: "1111",
            title: "mock video title",
            comments: [],
          },
        ]);

        expect(result.current.notFoundVideos).toEqual(["2222"]);
      });
    });
  });

  describe("fetchVideoComments throws error", () => {
    beforeEach(() => {});

    it("should change loading from current state -> true -> false", async () => {
      const { result } = renderHook(() => useFetchVideoComments());

      fetchMock.mockImplementationOnce(
        () => Promise.reject("Some Error") as Promise<Response>
      );

      act(() => {
        result.current.fetchVideoComments(["1111", "2222"]);
      });

      await waitFor(() => {
        expect(result.current.loading).toEqual(true);
      });

      await waitFor(() => {
        expect(result.current.loading).toEqual(false);
      });
    });

    it("should set error to true", async () => {
      const { result } = renderHook(() => useFetchVideoComments());

      fetchMock.mockImplementationOnce(
        () => Promise.reject("Some Error") as Promise<Response>
      );

      act(() => {
        result.current.fetchVideoComments(["1111", "2222"]);
      });

      await waitFor(() => {
        expect(result.current.error).toEqual(true);
      });
    });
  });
});
