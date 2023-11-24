import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    // Develope
    return {
      plugins: [react()],
    };
  } else {
    // Build
    return {
      base: "/react_challenge-coin_tracker/",
      plugins: [react()],
    };
  }
});

/* export default defineConfig({
  base: "/react_challenge-coin_tracker/",
  plugins: [react()],
}); */
