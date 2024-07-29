import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  build: {
    minify: 'terser', // Enable Terser for minification
    sourcemap: false, // Disable source maps for production builds
    rollupOptions: {
      plugins: [terser()], // Ensure minification
    },
  },
});
