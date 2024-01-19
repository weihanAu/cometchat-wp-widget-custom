export async function updateGroup(group_id, time_stamp) {
	const formData = new FormData();

	formData.set("action", "lw_chat_update_group_meta");

	formData.set("data[group_id]", group_id);

	formData.set("data[time_stamp]", time_stamp);

	const wp_res = await fetch(window.ajaxurl, {
		method: "POST",
		headers: { Authorization: `basic bGl2ZXdpcmVkZXY6Wng4ZEZxIXNBOTVAKiY=` },
		body: formData,
	});

	return await wp_res.json();
}
