import { rules, Todo } from "../models/todo.js";
import { validate } from "../utils/validator.js";

class TodoController {
	async all(req, res) {
		let todos = await Todo.find();

		return res.send(todos);
	}

	async create(req, res) {
		let [passes, data] = validate(req.body, rules);

		if (!passes) {
			return res.status(400).send(data);
		}

		let todo = await Todo.create(data);

		return res.status(400).send(todo);
	}

	async delete(req, res) {
		let todo = await Todo.findByIdAndDelete(req.params.id);

		return res.send(todo);
	}
}

export default new TodoController();
