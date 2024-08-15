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

export const chatsHeaderToggleButtonStyle = (img, theme) => {
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

export const chatsHeaderFullScreenStyle = (img, theme) => {
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

/**
 * @returns {import("@emotion/react").CSSObject}
 */
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
