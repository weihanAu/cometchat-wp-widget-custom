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

export const chatsHeaderDuplicateStyle = (img, theme) => {
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
