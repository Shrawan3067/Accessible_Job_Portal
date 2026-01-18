import type { AcceptedPlugin } from 'postcss';

// Minimal PostCSS config in TypeScript. Keep the JS config for tools that don't load TS configs.
const plugins: Record<string, AcceptedPlugin | Record<string, unknown>> = {
  tailwindcss: {},
  autoprefixer: {},
};

export default { plugins } as { plugins: Record<string, unknown> };
