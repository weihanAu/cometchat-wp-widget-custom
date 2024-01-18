export async function updateGroup(group_id, time_stamp) {
	const formData = new FormData();

	formData.set("action", "lw_chat_update_group_meta");

	formData.set("data", JSON.stringify({ group_id, time_stamp }));

	const wp_res = await fetch(window.ajaxurl, {
		method: "POST",
		headers: { Authorization: `basic bGl2ZXdpcmVkZXY6Wng4ZEZxIXNBOTVAKiY=` },
		body: formData,
	});

	return await wp_res.json();
}
