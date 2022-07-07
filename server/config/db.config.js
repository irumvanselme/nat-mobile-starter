import { mongoose } from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/nat-examination")
	// .connect("mongodb://data-store:27017/nat-examination")
	.then((res) => {
		console.log("Connected to the database");
	})
	.catch((e) => {
		console.log("Failed to connect to the database");
		// process.exit(0);
	});

import "../models/user.js";
import "../models/todo.js";
import "../models/article.js";
