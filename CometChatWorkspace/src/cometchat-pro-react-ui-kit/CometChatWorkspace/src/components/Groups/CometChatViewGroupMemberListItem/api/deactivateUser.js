import { APPID, REGION, fetctData } from "../../../../../../../fetchData";

export async function deactivateUser(option, props, context, toastRef) {
	const { member } = props;

	const { uid } = member;

	if (option === "DEACTIVATE PERMANENTLY") {
		// const url = `https://${APPID}.api-${REGION}.cometchat.io/v3/users`;

		// const res = await fetctData(url, {
		// 	method: "DELETE",
		// 	body: JSON.stringify({ uidsToDeactivate: [uid] }),
		// });
		// call wordpress
		const wp_url = `${window.location.href}wp-json/cometchat/deactivate-permanently?user_id=${uid}`;
		const wp_res = await fetch(wp_url, {
			headers: { Authorization: `basic bGl2ZXdpcmVkZXY6Wng4ZEZxIXNBOTVAKiY=` },
		});
		if (res.status === 200 && wp_res.status === 200 && res.ok) {
			//tell users that user is deactivated permanently
			toastRef.setSuccess("user is deactivated permanently");
		}
	}

	/**
	 * @todo
	 */
	if (option === "DEACTIVATE 15 MINUTE") {
		// //call cometchat
		// const url = `https://${APPID}.api-${REGION}.cometchat.io/v3/users`;
		// const res = await fetctData(url, {
		// 	method: "DELETE",
		// 	body: JSON.stringify({ uidsToDeactivate: [uid] }),
		// });
		// call wordpress
		const wp_url = `${window.location.href}wp-json/cometchat/deactivate-temporarily?user_id=${uid}`;
		const wp_res = await fetch(wp_url, {
			headers: { Authorization: `basic bGl2ZXdpcmVkZXY6Wng4ZEZxIXNBOTVAKiY=` },
		});
		if (wp_res.status === 200) {
			//tell users that user is deactivated for 15 minutes
			toastRef.setSuccess("user is deactivated for 15 minutes");
		}
	}

	const groupmembers = [...context.groupMembers];

	const filteredMembers = groupmembers.filter((groupmember) => {
		if (groupmember.uid === member.uid) {
			return false;
		}
		return true;
	});

	context.updateGroupMembers(filteredMembers);
}
