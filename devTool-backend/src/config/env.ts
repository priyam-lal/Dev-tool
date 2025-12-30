export function loadEnv() {
    let required = ["PORT", "NODE_ENV"];
    for (const key of required) {
        if (!process.env[key]) {
            throw new Error(`Missing required env var: ${key}`);
        }
    }

    return {
        port: Number(process.env.PORT),
        nodeEnv: process.env.NODE_ENV
    };
}