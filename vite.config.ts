import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// npm i -D @types/node para que corra la configuracion

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    // esto nos permite simplificar las importaciones
    // tambien se agrega al tsconfig
  },
});
