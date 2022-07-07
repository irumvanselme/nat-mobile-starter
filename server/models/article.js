import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		required: true,
	},
});

const Article = mongoose.model("Article", articleSchema);

const rules = {
	title: "required",
	body: "required",
	summary: "required",
};

export { Article, rules };
