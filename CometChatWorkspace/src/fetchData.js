export const REGION = "us";

export const APPID = "242053eed084c85d";

/**
 * @param {RequestInfo | URL} input
 * @param {RequestInit} init
 */
export function fetctData(input, init) {
	return fetch(input, {
		...init,
		headers: {
			...init?.headers,
			apikey: "76cdda8b9290ad8211e3c1abde81d5284de1861a",
			accept: "application/json",
			"content-type": "application/json",
		},
	});
}
