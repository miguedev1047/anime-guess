const requireEnv = (key: string): string => {
	const value = import.meta.env[key];
	if (!value) {
		throw new Error(`Missing required environment variable: ${key}`);
	}
	return value;
};

export const env = {
	VITE_SERVER_URL: requireEnv("VITE_SERVER_URL"),
};
