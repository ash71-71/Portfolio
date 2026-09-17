import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const accessKey =
    env.WEB3FORMS_ACCESS_KEY ||
    env.VITE_WEB3FORMS_ACCESS_KEY ||
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.VITE_WEB3FORMS_ACCESS_KEY ||
    ''

  return {
    plugins: [react()],
    envPrefix: ['VITE_', 'WEB3FORMS_'],
    define: {
      'import.meta.env.WEB3FORMS_ACCESS_KEY': JSON.stringify(accessKey),
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(accessKey)
    }
  }
})
