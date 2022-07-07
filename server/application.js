import express from "express";
import { router } from "./config/routes.js";

export class Application {
	run() {
		const app = express();

		app.use(express.json());

		app.use(router);

		app.listen(process.env.PORT, () => {
			console.log("App running on port " + process.env.PORT);
		});
	}
}
