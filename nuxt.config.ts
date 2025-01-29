// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    colorMode: {
        classSuffix: "",
        fallback: "dark",
        preference: "system"
    },
    compatibilityDate: "2024-11-01",
    css: ["./app/assets/main.css"],
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
    tailwindcss: {
        cssPath: ["./app/assets/main.css", {injectPosition: "last"}],
        editorSupport: true,
        exposeConfig: true
    },
    typescript: {
        typeCheck: true
    }
});
