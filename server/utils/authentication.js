import bcrypt from "bcrypt";

async function encryptPassword(rawPassword) {
	let salt = await bcrypt.genSalt(10);

	return bcrypt.hash(rawPassword, salt);
}

export { encryptPassword };
