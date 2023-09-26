import { APPID, REGION, fetctData } from "../../../../../../../fetchData";

export async function deactivateUser(option, props, context) {
	const { member } = props;

	const { uid } = member;

	if (option === "DEACTIVATE PERMANENTLY") {
		const url = `https://${APPID}.api-${REGION}.cometchat.io/v3/users`;

		const res = await fetctData(url, {
			method: "DELETE",
			body: JSON.stringify({ uidsToDeactivate: [uid] }),
		});

		if (res.status === 200 && res.ok) {
		}
	}

	/**
	 * @todo
	 */
	if (option === "DEACTIVATE 15 MINUTE") {
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
