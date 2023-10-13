export const REGION = "us";

export const APPID = "2420365c5054bcab";

/**
 * @param {RequestInfo | URL} input
 * @param {RequestInit} init
 */
export function fetctData(input, init) {
	return fetch(input, {
		...init,
		headers: {
			...init?.headers,
			apikey: "6457e05101696996d5952c4cb06c3aa5cf60e76f",
			accept: "application/json",
			"content-type": "application/json",
		},
	});
}
