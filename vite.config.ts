// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // Porta fixa para desenvolvimento
    strictPort: true, // Falha se a porta já estiver em uso (evita trocar de porta silenciosamente)
    host: true,       // Permite acesso via IP da rede (útil para testar em dispositivos)
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});