import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../App.tsx";

describe("Button Test", () => {
  it("Should display button", () => {
    render(<App />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
