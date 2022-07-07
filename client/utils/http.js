import * as SecureStore from "expo-secure-store";

export async function get(url) {
	try {
		let res = await fetch("http://192.168.0.116:8000/" + url);

		let data = await res.json();

		return data;
	} catch (error) {}
}

export async function post(url, data) {
	let token = await SecureStore.getItemAsync("token");
	try {
		let res = await fetch("http://192.168.0.116:8000/" + url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		});

		let resJson = await res.text();

		console.log(resJson);

		return resJson;
	} catch (error) {
		return null;
	}
}
