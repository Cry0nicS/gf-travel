// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config
        }
    },
    future: {
        compatibilityVersion: 4
    },
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/eslint", "@nuxtjs/color-mode"],
    shadcn: {
        /**
         * Directory that the component lives in.
         */
        componentDir: "./app/components/ui",
        /**
         * Prefix for all the imported component
         */
        prefix: ""
    },
    ssr: true, // Used by modules like nuxt-image for static image generation
    typescript: {
        typeCheck: true
    }
});
