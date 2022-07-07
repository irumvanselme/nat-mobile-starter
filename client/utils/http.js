import * as SecureStore from "expo-secure-store";

import axios from "axios";

export async function get(url) {
	let res = await axios.get("http://192.168.0.141:8000/" + url);
	return res;
}

export async function post(url, data) {
	let token = await SecureStore.getItemAsync("token");

	let res = await axios.post("http://192.168.0.141:8000/" + url, data, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});

	return res;
}
