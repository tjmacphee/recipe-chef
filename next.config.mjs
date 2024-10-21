// next.config.mjs

import { hostname } from "os";

export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.spoonacular.com',
            },
        ],
    },
};