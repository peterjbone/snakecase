import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// pages/api/auth/logout.js
import cors, { runMiddleware } from "../../../../lib/cors";

async function handler(req, res) {
	await handleAuth();

	await runMiddleware(req, res, cors);

	res.status(200).json({ message: "success" });
}

export const GET = handler();
