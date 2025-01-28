// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config
        }
    },
    modules: ["@nuxt/eslint"],
    ssr: true, // Used by modules like nuxt-image for static image generation
    typescript: {
        typeCheck: true
    }
});
