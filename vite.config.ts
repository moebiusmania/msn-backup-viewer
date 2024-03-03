import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((): UserConfig => {
  return {
    // esbuild: {
    //   supported: {
    //     'top-level-await': true //browsers can handle top-level-await features
    //   },
    // },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    server: {
      port: 3000,
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
