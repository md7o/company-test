export const colors = {
  primary: "#2B6DF0",
  background: "#141A24",
  text: "#EEF0EA",
} as const;

export const spacing = { sm: 8, md: 16, lg: 24 } as const;

/**
 * Tokens as CSS custom properties, e.g. `--color-primary`, `--spacing-md`.
 * Spread onto a root element's `style` so CSS can use `var(--color-primary)`.
 */
export function toCssVars(): Record<`--${string}`, string> {
  const vars: Record<`--${string}`, string> = {};
  for (const [name, value] of Object.entries(colors)) {
    vars[`--color-${name}`] = value;
  }
  for (const [name, value] of Object.entries(spacing)) {
    vars[`--spacing-${name}`] = `${value}px`;
  }
  return vars;
}
