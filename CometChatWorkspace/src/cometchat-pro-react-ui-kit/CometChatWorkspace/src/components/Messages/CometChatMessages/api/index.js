import { CometChat } from "@cometchat-pro/chat";

/**
 * @param {CometChat.Message} message
 */
export async function deleteGroupMemberMessages(message) {
	const messageId = message.id;

	const region = window.COMETCHAT_APP_GEGION;

	const appid = window.COMETCHAT_APPID;

	const apikey = window.COMETCHAT_APIKEY;

	const url = `https://${appid}.api-${region}.cometchat.io/v3/messages/${messageId}`;

	return fetch(url, {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
			apikey,
		},
		body: JSON.stringify({ permanent: false }),
	});
}
