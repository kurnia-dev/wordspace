import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-vue3-google-signin', '@primevue/nuxt-module', "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'outlined',
      theme: {
        preset: Aura
      }
    }
  },
  googleSignIn: {
    clientId: '1045411498203-k275rplpsm8n2snkthdudu5j3j04qnla.apps.googleusercontent.com',
  }
})