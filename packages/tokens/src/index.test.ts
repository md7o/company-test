import { describe, expect, it } from "vitest";
import { colors, spacing } from "./index";

describe("tokens", () => {
  it("defines colors as hex values", () => {
    for (const value of Object.values(colors)) {
      expect(value).toMatch(/^#[0-9A-F]{6}$/i);
    }
  });

  it("keeps spacing in ascending order", () => {
    expect(spacing.sm).toBeLessThan(spacing.md);
    expect(spacing.md).toBeLessThan(spacing.lg);
  });
});
