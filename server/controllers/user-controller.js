import { User } from "../models/user.js";

class UserContoller {
	async all(req, res) {
		let users = await User.find();

		return res.send(users);
	}
}

export default new UserContoller();
