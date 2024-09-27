import { act, renderHook } from "@testing-library/react";
import { useLanguage } from "./useLanguage";

describe("useLanguage", () => {
  it("should render the initial language", () => {
    const { result } = renderHook(useLanguage);
    expect(result.current.language).toBe("en");
  });

  it("should change language with setLanguage", () => {
    const { result } = renderHook(useLanguage);

    act(() => {
      result.current.setLanguage("it");
    });

    expect(result.current.language).toBe("it");
  });
});
