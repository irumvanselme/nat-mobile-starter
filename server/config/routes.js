import { Router } from "express";

import authController from "../controllers/auth-controller.js";
import todoController from "../controllers/todo-controller.js";
import userController from "../controllers/user-controller.js";

const router = Router();

router.get("/", (req, res) => {
	return res.send("App not working");
});

/**
 * Auth Conroller related Endpoints
 */
router.post("/api/auth/login", authController.login);
router.post("/api/auth/register", authController.register);

/**
 * Users Conroller related Endpoints
 */
router.get("/api/users", userController.all);

/**
 *
 * Todos Controller related Endpoints
 */
router.get("/api/todos", todoController.all);
router.post("/api/todos", todoController.create);
router.delete("/api/todos/:id", todoController.delete);

export { router };
