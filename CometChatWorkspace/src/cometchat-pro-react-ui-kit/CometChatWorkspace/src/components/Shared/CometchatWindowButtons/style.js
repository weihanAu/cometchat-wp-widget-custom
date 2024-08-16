export function cometchatWindowButtonsStyle() {
	return {
		display: "flex",
		paddingTop: "4px",
		fontSize: "22px",

		"& button": {
			flexShrink: 0,
		},

		"& span": {
			fontSize: "22px",
		},
	};
}

export function popoverStyle() {
	return {
		position: "absolute",
		right: "calc(4em + 64px)",
		left: "unset",
		top: "6px",
		width: "fit-content",
	};
}

export function popoverContentStyle() {
	return {
		display: "flex",
		flexFlow: "column",
	};
}
