import { Router } from "express";

import articleController from "../controllers/article-controller.js";
import authController from "../controllers/auth-controller.js";
import todoController from "../controllers/todo-controller.js";
import userController from "../controllers/user-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/", (req, res) => {
	return res.send("App not working");
});

/**
 * Article Controller related endpoints
 */
router.get("/api/articles", articleController.all);
router.post("/api/articles", articleController.create);

/**
 * Auth Conroller related Endpoints
 */
router.post("/api/auth/login", authController.login);
router.post("/api/auth/register", authController.register);
router.get("/api/auth/profile", authMiddleware, authController.profile);

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
