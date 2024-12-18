/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { CometChatContext } from "../../../util/CometChatContext";
import { cometchatWindowButtonsStyle, popoverStyle } from "./style";
import { CometChatToastNotification } from "../CometChatToastNotification";
import { Button, Popover } from "antd";
import {
	CloseOutlined,
	EllipsisOutlined,
	ExpandOutlined,
	LineOutlined,
	SwitcherOutlined,
} from "@ant-design/icons";
import { CometChat } from "@cometchat-pro/chat";

export class CometchatWindowButtons extends React.Component {
	constructor(props) {
		super(props);

		this.toastRef = createRef();
	}

	render() {
		return (
			<CometChatContext.Consumer>
				{(context) => {
					const minimumCometChatWindow = () => {
						context.setMinimum();
					};

					const duplicateCometChatWindow = () => {
						// if (window.CometChatWidgetCount >= 3) {
						// 	this.toastRef.setError("Can't Open CometChat Widget More Than Three");

						// 	return;
						// }

						window.init(false);
					};

					const disposeCometChatWindow = () => {
						if (!context.targetElement) return;
						// if (window.CometChatWidgetCount <= 1) {
						// 	this.toastRef.setError("Can't Close CometChat Widget Less Than One");
						// 	return;
						// }
						// context.targetElement.remove();
						// window.window.CometChatWidgetCount--;
						var parentElement = context.targetElement.parentNode;
						window.destoryChat(parentElement.id);
					};

					let disposeBtn = (
						<Button
							type="link"
							onClick={disposeCometChatWindow}
							icon={<CloseOutlined />}
						/>
					);

					let minimumBtn = (
						<Button
							type="link"
							icon={<LineOutlined />}
							onClick={minimumCometChatWindow}
						/>
					);

					let duplicateBtn = (
						<Button
							type="link"
							icon={<SwitcherOutlined />}
							onClick={duplicateCometChatWindow}
						/>
					);

					let fullscreen = (
						<Button
							type="link"
							icon={<ExpandOutlined />}
							onClick={() => window.open("/chat", "_blank")}
						/>
					);

					if (context.isLiveStream) {
						minimumBtn = null;
						duplicateBtn = null;
						disposeBtn = null;
					}

					const { UIKitSettings } = context;

					const { chatWindow } = UIKitSettings;

					let node = chatWindow.document.querySelector("div[class*='__header']");

					if (
						context.type === CometChat.ACTION_TYPE.TYPE_USER ||
						context.type === CometChat.ACTION_TYPE.TYPE_GROUP
					) {
						node = chatWindow.document.querySelector(
							"div[class*='main__chat'] > div[class*='__header']"
						);
					}

					const dropdown = (
						<Popover
							trigger={["click"]}
							showArrow={false}
							getPopupContainer={() => node}
							overlayStyle={popoverStyle()}
							content={
								<div>
									{minimumBtn}
									{duplicateBtn}
									{fullscreen}
								</div>
							}
						>
							<Button id="ellipsis-btn" type="link" icon={<EllipsisOutlined />} />
						</Popover>
					);

					return (
						<div css={cometchatWindowButtonsStyle()}>
							{dropdown}
							{disposeBtn}
							<CometChatToastNotification
								ref={(el) => (this.toastRef = el)}
								lang={this.props.lang}
							/>
						</div>
					);
				}}
			</CometChatContext.Consumer>
		);
	}
}
