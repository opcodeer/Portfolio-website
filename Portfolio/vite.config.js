import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  plugins: [
    react(),
    terser() // Ensure minification for production
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
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
});
