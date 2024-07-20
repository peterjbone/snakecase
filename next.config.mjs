/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["utfs.io"]
	},
	async headers() {
		return [
			{
				// Matching all API routes under /src/app/api/auth
				source: "/src/app/api/auth/[kindeAuth]/route.js",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{
						key: "Access-Control-Allow-Origin",
						value: "https://snakecase-dev.vercel.app"
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
					},
					{
						key: "Access-Control-Allow-Headers",
						value:
							"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
					}
				]
			}
		];
	}
};

export default nextConfig;
