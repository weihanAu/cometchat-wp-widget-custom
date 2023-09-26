import { APPID, REGION, fetctData } from "../../../../../../../fetchData";

export async function toggleUserState(state, context) {
	const user = await context.getLoggedinUser();

	if (!user) return;

	const { uid } = user;

	const url = `https://${APPID}.api-${REGION}.cometchat.io/v3/users/${uid}`;

	const metadata = {};

	if (state === "ACTIVE") {
		metadata.userState = state;
	}

	if (state === "INVISIBLE") {
		metadata.userState = state;
	}

	const res = await fetctData(url, {
		method: "PUT",
		body: JSON.stringify({
			metadata,
		}),
	});

	console.log(res);

	if (res.ok) {
	} else {
	}
}
