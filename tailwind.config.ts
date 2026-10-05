import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{ts,tsx}"], theme: { extend: { colors: { red: { DEFAULT: "#e03324" }, amber: { DEFAULT: "#f5a800" }, ink: "#12151a", card: "#1a1f27", navy: "#0c1626", line: "#2a313c" }, fontFamily: { display: ["var(--font-display)", "Arial Narrow", "sans-serif"], body: ["var(--font-body)", "system-ui", "sans-serif"] } } }, plugins: [] };
export default config;
