import { LanguageProvider } from "@contexts/language";
import { App } from "@/components/app";
import { render, screen } from "@solidjs/testing-library";
import { describe, it, expect, vi } from "vitest";

function renderApp() {
  render(() => (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  ));
}



describe("landing page", () => {
  it("renders without crashing", () => {
    renderApp();
    expect(document.body).toBeTruthy();
  });
});
