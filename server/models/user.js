import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
	names: {
		type: String,
		required: true,
	},

	username: {
		type: String,
		require: true,
		unique: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},

	role: {
		type: String,
		required: true,
		enum: ["ADMIN", "USER"],
		default: "USER",
	},

	status: {
		type: String,
		enum: ["ACTIVE", "INACTIVE"],
		default: "ACTIVE",
	},
});

const User = mongoose.model("User", usersSchema);

export { User };
