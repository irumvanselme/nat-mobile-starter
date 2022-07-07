import Validator from "validatorjs";

export function validate(data, rules) {
	let valid = new Validator(data, rules);

	if (valid.fails()) return [false, valid.errors.all()];
	else return [true, valid.input];
}
