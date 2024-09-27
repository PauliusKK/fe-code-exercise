import { fireEvent, render, renderHook } from "@testing-library/react";
import { LanguagePicker } from "./LanguagePicker";
import { MemoryRouter } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

describe("LanguagePicker", () => {
  it("should render LanguagePicker", () => {
    const { container } = render(
      <MemoryRouter>
        <LanguagePicker />
      </MemoryRouter>
    );

    expect(container.querySelector(".language-picker")).toBeInTheDocument();
  });

  it("should change useLanguage hook language state to IT when clicked on IT button", () => {
    const { container } = render(
      <MemoryRouter>
        <LanguagePicker />
      </MemoryRouter>
    );

    fireEvent.click(container.querySelector(".it-btn") as HTMLElement);

    const { result } = renderHook(useLanguage);

    expect(result.current.language).toBe("it");
  });
});
