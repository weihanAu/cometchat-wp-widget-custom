import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

import {
	CometChatMessageActions,
	CometChatThreadedMessageReplyCount,
	CometChatReadReceipt,
} from "../";
import { CometChatMessageReactions } from "../Extensions";

import { ID, checkMessageForExtensionsData, getMessageFileMetadata } from "../../../util/common";
import * as enums from "../../../util/enums.js";

import {
	messageContainerStyle,
	messageWrapperStyle,
	messageVideoWrapperStyle,
	messageInfoWrapperStyle,
	messageReactionsWrapperStyle,
} from "./style";
import { CometChatContext } from "../../../util/CometChatContext";

import { messageTxtStyle, messageTxtWrapperStyle } from "../CometChatSenderTextMessageBubble/style";
class CometChatSenderVideoMessageBubble extends React.Component {
	static contextType = CometChatContext;

	constructor(props) {
		super(props);

		this.state = {
			isHovering: false,
			fileData: {},
			previewVideo: false,
		};
	}

	componentDidMount() {
		const fileData = this.getFileData();
		this.setState({ fileData: fileData });
	}

	shouldComponentUpdate(nextProps, nextState) {
		const currentMessageStr = JSON.stringify(this.props.message);
		const nextMessageStr = JSON.stringify(nextProps.message);

		if (
			currentMessageStr !== nextMessageStr ||
			this.state.isHovering !== nextState.isHovering ||
			this.state.fileData !== nextState.fileData
		) {
			return true;
		}
		return false;
	}

	componentDidUpdate(prevProps) {
		const previousMessageStr = JSON.stringify(prevProps.message);
		const currentMessageStr = JSON.stringify(this.props.message);

		if (previousMessageStr !== currentMessageStr) {
			const fileData = this.getFileData();

			const previousfileData = JSON.stringify(this.state.fileData);
			const currentfileData = JSON.stringify(fileData);

			if (previousfileData !== currentfileData) {
				this.setState({ fileData: fileData });
			}
		}
	}

	getFileData = () => {
		const metadataKey = enums.CONSTANTS["FILE_METADATA"];
		const fileMetadata = getMessageFileMetadata(this.props.message, metadataKey);

		if (fileMetadata instanceof Blob) {
			return { fileName: fileMetadata["name"] };
		} else if (
			this.props.message.data.attachments &&
			typeof this.props.message.data.attachments === "object" &&
			this.props.message.data.attachments.length
		) {
			const fileName = this.props.message.data.attachments[0]?.name;
			const fileUrl = this.props.message.data.attachments[0]?.url;

			return { fileName, fileUrl: fileUrl };
		}
	};

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
		if (this.state.fileData) {
			if (!Object.keys(this.state.fileData).length) {
				return null;
			}
		}

		if (this.props.message.tags && this.props.message.tags.includes("delete")) return null;

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
				className="sender__message__container message__video"
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
			>
				{toolTipView}

				{this.props.message.tags && this.props.message.tags.includes("unmoderated") ? (
					<div css={messageWrapperStyle()} className="message__wrapper">
						<div
							className="message__txt__wrapper"
							css={messageTxtWrapperStyle(this.context)}
						>
							<p css={messageTxtStyle(this.props, false, 0)} className="message__txt">
								[Video is being reviewed by a Livewire Facilitator.]
							</p>
						</div>
					</div>
				) : (
					<div css={messageWrapperStyle()} className="message__wrapper">
						<div css={messageVideoWrapperStyle()} className="message__video__wrapper">
							<video controls src={this.state.fileData?.fileUrl}></video>
						</div>
					</div>
				)}

				<div
					css={messageWrapperStyle()}
					className="message__wrapper"
					style={{
						display: isPreviewVideo ? "block" : "none",
					}}
				>
					<div css={messageVideoWrapperStyle()} className="message__video__wrapper">
						<video controls src={this.state.fileData?.fileUrl}></video>
					</div>
				</div>

				{messageReactions}

				<div css={messageInfoWrapperStyle()} className="message__info__wrapper">
					<CometChatThreadedMessageReplyCount
						message={this.props.message}
						actionGenerated={this.props.actionGenerated}
					/>
					<CometChatReadReceipt message={this.props.message} />
				</div>
			</div>
		);
	}
}

// Specifies the default values for props:
CometChatSenderVideoMessageBubble.defaultProps = {
	actionGenerated: () => {},
};

CometChatSenderVideoMessageBubble.propTypes = {
	actionGenerated: PropTypes.func.isRequired,
	message: PropTypes.object.isRequired,
};

export { CometChatSenderVideoMessageBubble };
