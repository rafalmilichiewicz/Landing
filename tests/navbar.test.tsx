import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, fireEvent } from "@solidjs/testing-library";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Navbar } from "@components/navbar";

vi.mock("@contexts/language", () => ({
  useLanguage: vi.fn(),
}));
import { useLanguage } from "@contexts/language";

const language = ["button", { name: /language/i }] as const;
const polish = ["button", { name: /polski/i }] as const;
const english = ["button", { name: /english/i }] as const;

describe("Navbar", () => {
  const setLanguage = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      setLanguage,
      t: () => ({
        navbar: {
          language: "Language",
          emoji: "🇬🇧",
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
    expect(screen.getByRole(...language)).toBeInTheDocument();

    expect(screen.getByRole(...polish)).toBeInTheDocument();
    expect(screen.getByRole(...english)).toBeInTheDocument();
  });

  it("renders the language options", () => {
    render(() => <Navbar />);

    expect(screen.getByRole(...polish)).toBeInTheDocument();
    expect(screen.getByRole(...english)).toBeInTheDocument();
  });

  it("sets the language to Polish when Polski is clicked", () => {
    render(() => <Navbar />);

    fireEvent.click(screen.getByRole(...polish));

    expect(setLanguage).toHaveBeenCalledTimes(1);
    expect(setLanguage).toHaveBeenCalledWith("pl");
  });

  it("sets the language to English when English is clicked", () => {
    render(() => <Navbar />);

    fireEvent.click(screen.getByRole(...english));

    expect(setLanguage).toHaveBeenCalledTimes(1);
    expect(setLanguage).toHaveBeenCalledWith("en");
  });

  it("blurs the active element after selecting Polish", () => {
    render(() => <Navbar />);

    const blurSpy = vi.spyOn(HTMLElement.prototype, "blur");

    fireEvent.click(screen.getByRole(...polish));

    expect(blurSpy).toHaveBeenCalled();

    blurSpy.mockRestore();
  });

  it("blurs the active element after selecting English", () => {
    render(() => <Navbar />);

    const blurSpy = vi.spyOn(HTMLElement.prototype, "blur");

    fireEvent.click(screen.getByRole(...polish));

    expect(blurSpy).toHaveBeenCalled();

    blurSpy.mockRestore();
  });
});
