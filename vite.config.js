import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Binds the server to all network interfaces
    port: 3000, // You can change this if you prefer another port
  },
});
