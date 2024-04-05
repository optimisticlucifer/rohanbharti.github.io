import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rohanbharti.github.io/",
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
})
