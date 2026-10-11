import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, fireEvent } from "@solidjs/testing-library";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Navbar } from "@components/navbar";

vi.mock("@contexts/language", () => ({
  useLanguage: vi.fn(),
}));
import { useLanguage } from "@contexts/language";

describe("Navbar", () => {
  const setLanguage = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      setLanguage,
      t: () => ({
        navbar: {
          language: "Language",
        },
      }),
    } as unknown as ReturnType<typeof useLanguage>);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the navbar and language selector", () => {
    render(() => <Navbar />);

    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();

    expect(screen.getByText("Polski")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("renders the language options", () => {
    render(() => <Navbar />);

    expect(screen.getByText("Polski")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("sets the language to Polish when Polski is clicked", () => {
    render(() => <Navbar />);

    fireEvent.click(screen.getByText("Polski"));

    expect(setLanguage).toHaveBeenCalledTimes(1);
    expect(setLanguage).toHaveBeenCalledWith("pl");
  });

  it("sets the language to English when English is clicked", () => {
    render(() => <Navbar />);

    fireEvent.click(screen.getByText("English"));

    expect(setLanguage).toHaveBeenCalledTimes(1);
    expect(setLanguage).toHaveBeenCalledWith("en");
  });

  it("blurs the active element after selecting Polish", () => {
    render(() => <Navbar />);

    const polishOption = screen.getByText("Polski");
    const blurSpy = vi.spyOn(HTMLElement.prototype, "blur");

    fireEvent.click(polishOption);

    expect(blurSpy).toHaveBeenCalled();

    blurSpy.mockRestore();
  });

  it("blurs the active element after selecting English", () => {
    render(() => <Navbar />);

    const blurSpy = vi.spyOn(HTMLElement.prototype, "blur");

    fireEvent.click(screen.getByText("English"));

    expect(blurSpy).toHaveBeenCalled();

    blurSpy.mockRestore();
  });
});
