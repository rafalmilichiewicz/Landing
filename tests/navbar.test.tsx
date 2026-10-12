import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, fireEvent } from "@solidjs/testing-library";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Navbar } from "@components/navbar";

vi.mock("@contexts/language", () => ({
  useLanguage: vi.fn(),
}));

const languageEn = ["button", { name: /language/i }] as const;
const languagePl = ["button", { name: /język/i }] as const;
const polish = ["button", { name: /polski/i }] as const;
const english = ["button", { name: /english/i }] as const;

describe("Navbar", () => {
  const setLanguage = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the navbar and language selector", () => {
    render(() => <Navbar />);

    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
    expect(screen.getByRole(...languageEn)).toBeInTheDocument();

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

    expect(screen.getByRole(...languagePl)).toBeInTheDocument();
  });

  it("sets the language to English when English is clicked", () => {
    render(() => <Navbar />);

    fireEvent.click(screen.getByRole(...english));

    expect(screen.getByRole(...languageEn)).toBeInTheDocument();
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
