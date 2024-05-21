export const presenceStyle = (props) => {
	const { user } = props;

	let presenceStatus = {
		backgroundColor: "#C4C4C4",
	};

	// if (props.status === "online" || props.status === "available") {
	// 	presenceStatus = {
	// 		backgroundColor: "#3BDF2F",
	// 	};
	// }

	if (props.status === "online") {
		presenceStatus = {
			backgroundColor: "#3BDF2F",
		};
	}

	if (user) {
		if (user?.metadata?.userState === "INVISIBLE") {
			presenceStatus = {
				backgroundColor: "#C4C4C4",
			};
		}
	}

	return {
		width: "9px",
		height: "9px",
		top: "-12px",
		float: "right",
		position: "relative",
		...presenceStatus,
	};
};
