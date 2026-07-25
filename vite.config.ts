import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@gertig": path.resolve(__dirname, "./app/javascript/gertig"),
    },
  },
  // Tailwind v4 oxide hangs the Vite dev server on this machine.
  // Gertig pages use CSS modules; re-enable @tailwindcss/vite when that's fixed.
  plugins: [react(), RubyPlugin()],
  server: {
    host: "127.0.0.1",
  },
});
