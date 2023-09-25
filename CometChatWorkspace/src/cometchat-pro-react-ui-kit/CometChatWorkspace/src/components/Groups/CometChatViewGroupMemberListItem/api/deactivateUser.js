import { APPID, REGION, fetctData } from "../../../../../../../fetchData";

export async function deactivateUser(option, props) {
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
}