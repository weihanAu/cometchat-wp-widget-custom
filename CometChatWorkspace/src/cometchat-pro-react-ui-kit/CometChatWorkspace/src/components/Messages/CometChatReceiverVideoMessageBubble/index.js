import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { CometChat } from "@cometchat-pro/chat";

import {
	CometChatMessageActions,
	CometChatThreadedMessageReplyCount,
	CometChatReadReceipt,
} from "../";
import { CometChatMessageReactions } from "../Extensions";
import { CometChatAvatar } from "../../Shared";

import { CometChatContext } from "../../../util/CometChatContext";
import { checkMessageForExtensionsData } from "../../../util/common";

import { theme } from "../../../resources/theme";

import {
	messageContainerStyle,
	messageWrapperStyle,
	messageThumbnailStyle,
	messageDetailStyle,
	nameWrapperStyle,
	nameStyle,
	messageVideoContainerStyle,
	messageVideoWrapperStyle,
	messageInfoWrapperStyle,
	messageReactionsWrapperStyle,
} from "./style";

import {
	messageTxtWrapperStyle,
	messageTxtStyle,
} from "../CometChatReceiverTextMessageBubble/style";

class CometChatReceiverVideoMessageBubble extends React.Component {
	static contextType = CometChatContext;

	constructor(props) {
		super(props);

		this.state = {
			isHovering: false,
			previewVideo: false,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		const currentMessageStr = JSON.stringify(this.props.message);
		const nextMessageStr = JSON.stringify(nextProps.message);

		if (
			currentMessageStr !== nextMessageStr ||
			this.state.isHovering !== nextState.isHovering
		) {
			return true;
		}
		return false;
	}

	handleMouseHover = () => {
		this.setState(this.toggleHoverState);
	};

	toggleHoverState = (state) => {
		return {
			isHovering: !state.isHovering,
		};
	};

	togglePreviewVieo = () => {
		this.setState({ previewVideo: !this.state.previewVideo });

		this.forceUpdate();
	};

	render() {
		let avatar = null,
			name = null;

		if (this.props.message.tags && this.props.message.tags.includes("delete")) return null;

		if (this.props.message.receiverType === CometChat.RECEIVER_TYPE.GROUP) {
			avatar = (
				<div css={messageThumbnailStyle()} className="message__thumbnail">
					<CometChatAvatar user={this.props.message.sender} />
				</div>
			);

			name = (
				<div css={nameWrapperStyle(avatar)} className="message__name__wrapper">
					<span css={nameStyle(this.context)} className="message__name">
						{this.props.message.sender.name}
					</span>
				</div>
			);
		}

		let messageReactions = null;
		const reactionsData = checkMessageForExtensionsData(this.props.message, "reactions");
		if (reactionsData) {
			if (Object.keys(reactionsData).length) {
				messageReactions = (
					<div
						css={messageReactionsWrapperStyle()}
						className="message__reaction__wrapper"
					>
						<CometChatMessageReactions
							message={this.props.message}
							actionGenerated={this.props.actionGenerated}
						/>
					</div>
				);
			}
		}

		let toolTipView = null;
		if (this.state.isHovering) {
			toolTipView = (
				<CometChatMessageActions
					message={this.props.message}
					actionGenerated={this.props.actionGenerated}
					previewVideo={this.togglePreviewVieo}
				/>
			);
		}

		const isPreviewVideo =
			this.state.previewVideo && this.props.message?.tags?.includes("unmoderated");

		return (
			<div
				css={messageContainerStyle()}
				className="receiver__message__container message__video"
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
			>
				<div css={messageWrapperStyle()} className="message__wrapper">
					{avatar}
					<div css={messageDetailStyle(name)} className="message__details">
						{name}
						{toolTipView}
						{this.props.message.tags &&
						this.props.message.tags.includes("unmoderated") ? (
							<div css={messageWrapperStyle()} className="message__wrapper">
								<div
									className="message__txt__wrapper"
									css={messageTxtWrapperStyle(this.context)}
								>
									<p
										css={messageTxtStyle(false, 0, this.context)}
										className="message__txt"
									>
										[Video is being reviewed by a Livewire Facilitator.]
									</p>
								</div>
							</div>
						) : (
							<div
								css={messageVideoContainerStyle()}
								className="message__video__container"
							>
								<div
									css={messageVideoWrapperStyle()}
									className="message__video__wrapper"
								>
									<video controls>
										<source src={this.props.message.data.attachments[0].url} />
									</video>
								</div>
							</div>
						)}

						{/* Preview */}
						<div
							css={messageVideoContainerStyle()}
							className="message__video__container"
							style={{
								display: isPreviewVideo ? "block" : "none",
							}}
						>
							<div
								css={messageVideoWrapperStyle()}
								className="message__video__wrapper"
							>
								<video controls>
									<source src={this.props.message.data.attachments[0].url} />
								</video>
							</div>
						</div>
						{messageReactions}
						<div css={messageInfoWrapperStyle()} className="message__info__wrapper">
							<CometChatReadReceipt message={this.props.message} />
							<CometChatThreadedMessageReplyCount
								message={this.props.message}
								actionGenerated={this.props.actionGenerated}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Specifies the default values for props:
CometChatReceiverVideoMessageBubble.defaultProps = {
	theme: theme,
	actionGenerated: () => {},
};

CometChatReceiverVideoMessageBubble.propTypes = {
	theme: PropTypes.object,
	actionGenerated: PropTypes.func.isRequired,
	message: PropTypes.object.isRequired,
};

export { CometChatReceiverVideoMessageBubble };
