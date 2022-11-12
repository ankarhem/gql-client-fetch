import { defineConfig } from 'vite';
import pkg from './package.json';
import path from 'path';

export default defineConfig({
  plugins: [],
  build: {
    outDir: path.resolve(__dirname, './dist/bundles'),
    sourcemap: true,
    target: 'esnext',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {})],
      output: {
        sourcemapExcludeSources: true,
      },
    },
  },
});
