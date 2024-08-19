import { extendTheme } from "@mui/material";
import { pigment } from "@pigment-css/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { red } from "@mui/material/colors";

installGlobals();

/** @type {import('@pigment-css/vite-plugin').PigmentOptions} */
const pigmentConfig = {
  theme: extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
          },
          error: {
            main: red.A400,
          },
        },
      },
    },
  }),
  transformLibraries: ["@mui/material"],
};

export default defineConfig({
  optimizeDeps: {
    include: [
      "@mui/material",
      "@pigment-css/react",
      "@mui/material-pigment-css",
    ],
  },
  ssr: {
    noExternal: ["@mui/**", "@pigment-css/**"],
  },
  plugins: [pigment(pigmentConfig), remix(), tsconfigPaths()],
});
