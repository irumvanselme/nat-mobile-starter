import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export async function authMiddleware(req, res, next) {
	const header = req.header("Authorization");
	if (!header || !header.startsWith("Bearer "))
		return res
			.send(API_RESPONSE(false, "No Token Found", null, 400))
			.status(401);

	try {
		const decoded = jwt.verify(header.split(" ")[1], "my_No_KeY");

		const user = await User.findById(decoded.id);

		if (!user) return res.send({ message: "User not found" }).status(401);

		req.user = user;

		return next();
	} catch (error) {
		console.log(error.message);
		return res.status(400).send({ message: error.message });
	}
}
