import { User } from "../models/user.js";
import { encryptPassword } from "../utils/authentication.js";
import { validate } from "../utils/validator.js";

const loginRules = {
	email: "required|email",
	password: "required",
};

const registerRules = {
	names: "required",
	email: "required|email",
	username: "required",
	password: "required",
};

class AuthController {
	async login(req, res) {
		let [passes, data] = validate(req.body, loginRules);

		if (!passes) return res.status(400).send(data);

		let user = User.findOne({ email: data.email });

		if (!user) return res.status(400).send({ message: "User not found" });

		if (user.password !== data.password)
			return res.status(400).send({ message: "Invalid password" });

		return res.send(user);
	}

	async register(req, res) {
		let [passes, data] = validate(req.body, registerRules);

		if (!passes) return res.status(400).send(data);

		data.password = await encryptPassword(data.password);

		console.log(data);

		let user = await User.create(data);

		return res.send(user);
	}
}

export default new AuthController();
