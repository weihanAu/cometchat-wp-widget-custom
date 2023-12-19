export async function moderateGroupMemberMessage(message) {
	const messageId = message.id;

	console.log(messageId);

	const url = `/wp-json/cometchat/edit_message`;

	return fetch(url, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
		body: JSON.stringify({ data: { message_id: messageId } }),
	});
}
