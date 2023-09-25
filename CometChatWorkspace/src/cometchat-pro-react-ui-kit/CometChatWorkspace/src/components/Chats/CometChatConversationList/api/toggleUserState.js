import { APPID, REGION, fetctData } from "../../../../../../../fetchData";

export async function toggleUserState(state, context) {
	const user = await context.getLoggedinUser();

	if (!user) return;

	const { uid, metadata } = user;

	const url = `https://${APPID}.api-${REGION}.cometchat.io/v3/users/${uid}`;

	const newMetadata = {
		fakeOffline: true,
	};

	if (metadata) Object.assign(newMetadata, metadata);

	if (state === "ACTIVE") {
		newMetadata.fakeOffline = false;
	}

	const res = await fetctData(url, {
		method: "PUT",
		body: JSON.stringify({
			metadata: newMetadata,
		}),
	});

	if (res.ok) {
	} else {
	}
}
