import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/components/Modal.jsx',
      name: 'ReactModalLibrary',
      fileName: (format) => `vite-modal-library.${format}.js`,
    },
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
