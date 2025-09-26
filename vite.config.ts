/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,             // Permite usar describe, it, expect sin importar
    environment: 'node',       // Usa entorno Node (podés cambiar a 'jsdom' si hacés código frontend)
    coverage: {
      reporter: ['text', 'json', 'html'], // Tipos de reporte de cobertura
    },
  },
})
