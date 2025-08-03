import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@gertig": path.resolve(__dirname, "./app/javascript/gertig"),
      "@walk_good": path.resolve(__dirname, "./app/javascript/walk_good"),
    },
  },
  plugins: [react(), tailwindcss(), RubyPlugin()],
});
