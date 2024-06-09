import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Copilot',
    short_name: 'Copilot',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    lang: 'vi-VN',
    scope: '/',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
    ]
  }
}
