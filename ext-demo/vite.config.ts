import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from "vite-tsconfig-paths";
import { ManifestV3Export, crx } from "@crxjs/vite-plugin";

import manifestJson from "./public/manifest.json";

const manifest = manifestJson as ManifestV3Export;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(),tsconfigPaths(),crx({ manifest })],
})
