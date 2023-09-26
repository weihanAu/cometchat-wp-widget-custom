export const chatsWrapperStyle = (props, theme) => {
	const borderStyle =
		props._parent === ""
			? {
					border: `1px solid ${theme.borderColor.primary}`,
			  }
			: {};

	return {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		boxSizing: "border-box",
		...borderStyle,
		"*": {
			boxSizing: "border-box",
			"::-webkit-scrollbar": {
				width: "8px",
				height: "4px",
			},
			"::-webkit-scrollbar-track": {
				background: "#ffffff00",
			},
			"::-webkit-scrollbar-thumb": {
				background: "#ccc",
				"&:hover": {
					background: "#aaa",
				},
			},
		},
	};
};

export const chatsHeaderStyle = (theme) => {
	return {
		padding: "16px",
		display: "flex",
		alignItems: "center",
		borderBottom: `1px solid ${theme.borderColor.primary}`,
		height: "69px",
	};
};

export const chatsHeaderCloseStyle = (img, theme) => {
	const mq = [...theme.breakPoints];

	return {
		cursor: "pointer",
		display: "none",
		mask: `url(${img}) no-repeat left center`,
		backgroundColor: `${theme.primaryColor}`,
		height: "24px",
		width: "33%",
		[`@media ${mq[0]}`]: {
			display: "block!important",
		},
	};
};

export const chatsHeaderSettingStyle = (img, theme) => {
	const mq = [...theme.breakPoints];

	return {
		cursor: "pointer",
		display: "block",
		background: `url(${img}) no-repeat center`,
		width: "36px",
		height: "36px",
		[`@media ${mq[0]}`]: {
			display: "block!important",
		},
	};
};

export const chatsHeaderMinimumStyle = (img, theme) => {
	const mq = [...theme.breakPoints];

	return {
		cursor: "pointer",
		display: "block",
		background: `url(${img}) no-repeat bottom`,
		width: "36px",
		height: "36px",
		[`@media ${mq[0]}`]: {
			display: "block!important",
		},
	};
};

export const chatsHeaderDisposeStyle = (img, theme) => {
	const mq = [...theme.breakPoints];

	return {
		cursor: "pointer",
		display: "block",
		background: `url(${img}) no-repeat center`,
		width: "36px",
		height: "36px",
		[`@media ${mq[0]}`]: {
			display: "block!important",
		},
	};
};

export const chatsHeaderTitleStyle = (props) => {
	const alignment =
		props.hasOwnProperty("enableCloseMenu") && props.enableCloseMenu.length > 0
			? {
					width: "33%",
					textAlign: "center",
			  }
			: {};

	return {
		margin: "0",
		display: "inline-block",
		width: "100%",
		textAlign: "left",
		fontSize: "22px",
		fontWeight: "700",
		lineHeight: "26px",
		...alignment,
		"&[dir=rtl]": {
			textAlign: "right",
		},
	};
};

export const chatsMsgStyle = () => {
	return {
		overflow: "hidden",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: "50%",
	};
};

export const chatsMsgTxtStyle = (theme) => {
	return {
		margin: "0",
		minHeight: "36px",
		color: `${theme.color.secondary}`,
		fontSize: "20px!important",
		fontWeight: "600",
		lineHeight: "30px",
		wordWrap: "break-word",
		padding: "0 16px",
	};
};

export const chatsListStyle = () => {
	return {
		height: "calc(100% - 75px)",
		width: "100%",
		overflowY: "auto",
		margin: "0",
		padding: "0",
	};
};

export const stateCollapseStyle = (theme) => {
	return {
		width: "100%",
		position: "absolute",
		top: 70,
		left: 0,
		padding: "24px 12px",
		borderBottom: `1px solid #eaeaea`,
		zIndex: 99,
		background: "#ffffff",
		label: {
			width: "100%",
			fontSize: "16px",
			fontWeight: "bold",
		},
		".user-state-radio": {
			padding: "16px",
			background: "#eaeaea",
			borderRadius: "8px",
			marginBottom: "4px",
			label: {
				position: "relative",
				"&::before": {
					content: '" "',
					width: "20px",
					height: "20px",
					position: "absolute",
					boxSizing: "border-box",
					borderRadius: "50%",
					border: "2px solid #eaeaea",
					left: "-28px",
					top: "-2px",
				},
			},
			input: {
				visibility: "hidden",
				marginRight: "16px",
				"&:checked": {
					"+ label": {
						"&::before": {
							background: "green",
							border: "none",
						},
					},
				},
			},
		},
	};
};
