import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      developmentOptions: {
        enabled: true
      },

      manifest: {
        name: 'Farmily',
        short_name: 'Farmily',
        description: 'Smart Soil Health Monitoring Platform',

        theme_color: '#8bb82e',
        background_color: '#f5f0e6',

        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      },
    }),
  ],
})