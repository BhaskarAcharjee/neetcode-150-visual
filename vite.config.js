import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function copyVisualPlugin() {
  return {
    name: 'copy-visual-dir',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'visual');
      const destDir = path.resolve(__dirname, 'dist/visual');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('[copy-visual-dir] Successfully copied visual/ to dist/visual/');
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyVisualPlugin()],
  server: {
    port: 3000,
    open: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

