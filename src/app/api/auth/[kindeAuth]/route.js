import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// pages/api/auth/logout.js
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
	// Run the middleware
	await runMiddleware(req, res, cors);

	// Your logout logic here
	res.status(200).json({ message: "success" });
}

export const GET = handleAuth();
