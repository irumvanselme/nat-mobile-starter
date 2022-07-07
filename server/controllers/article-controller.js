import { Article, rules } from "../models/article.js";
import { validate } from "../utils/validator.js";

class ArticleController {
	async all(req, res) {
		let articles = await Article.find();
		return res.send(articles);
	}

	async create(req, res) {
		let [passes, data] = validate(req.body, rules);

		if (!passes) {
			return res.status(400).send(data);
		}

		let article = await Article.create(req.body);
		return res.status(201).send(article);
	}
}

export default new ArticleController();
