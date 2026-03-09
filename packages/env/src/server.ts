import "dotenv/config";

const requireEnv = (key: string): string => {
	const value = process.env[key];
	if (!value) {
		throw new Error(`Missing required environment variable: ${key}`);
	}
	return value;
};

export const env = {
	DATABASE_URL: requireEnv("DATABASE_URL"),
	DATABASE_AUTH_TOKEN: requireEnv("DATABASE_AUTH_TOKEN"),
	BETTER_AUTH_SECRET: requireEnv("BETTER_AUTH_SECRET"),
	BETTER_AUTH_URL: requireEnv("BETTER_AUTH_URL"),
	CORS_ORIGIN: requireEnv("CORS_ORIGIN"),
	NODE_ENV: (process.env.NODE_ENV ?? "development") as
		| "development"
		| "production"
		| "test",
};
