import { render } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("should render Header", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(container.querySelector(".header__logo")).toBeInTheDocument();
  });

  it("should render Header with EN flag when language is EN", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(container.querySelector(".en-flag")).toBeInTheDocument();
  });
});
