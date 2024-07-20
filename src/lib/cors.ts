// lib/cors.js
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
	methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
	origin: "https://snakecase-dev.vercel.app" // Cambia esto a tu origen
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
//@ts-ignore
function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		//@ts-ignore
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}
			return resolve(result);
		});
	});
}

export default cors;
export { runMiddleware };
