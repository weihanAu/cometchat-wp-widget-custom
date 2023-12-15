import { CometChat } from "@cometchat-pro/chat";

/**
 * @param {CometChat.Message} message
 */
export async function deleteGroupMemberMessages(message) {
	const messageId = message.id;

	const url = `/wp-json/cometchat/delete_message`;

	return fetch(url, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
		body: JSON.stringify({ data: { message_id: messageId } }),
	});
}
