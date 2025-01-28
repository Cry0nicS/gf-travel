/**
 * @type {import("@cspell/cspell-types").FileSettings}
 */
const config = {
    version: "0.2",
    files: ["**/*.{html,js,json,jsx,md,scss,ts,tsx,vue}", "**/.*.{ts,tsx,js,jsx,vue}"],
    ignorePaths: ["package-lock.json", "app/components/ui/**"],
    language: "en",
    cache: {
        useCache: true,
        cacheLocation: "node_modules/.cache/cspell"
    },
    dictionaries: ["custom", "fonts", "html", "node", "software-terms", "typescript"],
    dictionaryDefinitions: [
        {
            name: "custom",
            path: "custom.dic",
            addWords: true
        }
    ],
    languageSettings: [
        {
            languageId: "*",
            locale: "*",
            dictionaries: ["fonts, html, node, software-terms, typescript"]
        }
    ]
};

export default config;
