export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-07-15',

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Sistem Pengelolaan Data Pegawai',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Aplikasi Sistem Pengelolaan Data Pegawai - HR Dashboard' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/main.css'],

  plugins: ['~/plugins/bootstrap.client.ts'],

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '8h',
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'default_refresh',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    uploadMaxSize: parseInt(process.env.UPLOAD_MAX_SIZE || '5242880'),
    uploadDir: process.env.UPLOAD_DIR || 'public/uploads',
    loginMaxAttempts: parseInt(process.env.LOGIN_MAX_ATTEMPTS || '5'),
    loginWindowMs: parseInt(process.env.LOGIN_WINDOW_MS || '900000'),
    public: {
      appName: process.env.APP_NAME || 'Sistem Pengelolaan Data Pegawai',
    },
  },

  devtools: { enabled: true },

  vite: {
    build: {
      target: 'es2022',
    },
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'bootstrap/dist/js/bootstrap.bundle.min.js',
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'es2022',
      },
    },
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
        },
      },
    },
  },

  typescript: {
    strict: true,
  },
})
