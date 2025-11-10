import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Your repo path under a user/organization site is the base
  // e.g., https://a12cca.github.io/cca/  -> base must be "/cca/"
  base: "/cca/"
});
