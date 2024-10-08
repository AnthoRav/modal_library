import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/Modal/Modal.jsx',
      name: 'ViteModalLibrary',
      fileName: (format) => `vite-modal-library.${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      // Assurez-vous d'externaliser React pour ne pas l'inclure dans le bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
