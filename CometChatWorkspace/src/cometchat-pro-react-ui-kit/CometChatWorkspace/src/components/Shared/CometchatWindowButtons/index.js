import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { CometChatContext } from "../../../util/CometChatContext";
import dashIcon from "./resources/dash.svg";
import xIcon from "./resources/x.svg";
import upIcon from "./resources/up.svg";
import copyIcon from "./resources/copy.svg";
import {
	chatsHeaderDisposeStyle,
	chatsHeaderDuplicateStyle,
	chatsHeaderFullScreenStyle,
	chatsHeaderMinimumStyle,
	chatsHeaderToggleButtonStyle,
} from "./style";
import { theme } from "../../../resources/theme";
import { CometChatToastNotification } from "../CometChatToastNotification";
import dotsIcon from "./resources/three-dots.svg";
import fullscreenIcon from "./resources/fullscreen.svg";

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

					let minimumBtn = (
						<i
							style={chatsHeaderMinimumStyle(
								context.minimum ? upIcon : dashIcon,
								theme
							)}
							onClick={minimumCometChatWindow}
						></i>
					);
					let disposeBtn = (
						<i
							style={chatsHeaderDisposeStyle(xIcon, theme)}
							onClick={disposeCometChatWindow}
						></i>
					);

					let duplicateBtn = (
						<i
							style={chatsHeaderDuplicateStyle(copyIcon, theme)}
							onClick={duplicateCometChatWindow}
						></i>
					);

					let fullscreen = (
						<i
							style={chatsHeaderFullScreenStyle(fullscreenIcon, theme)}
							onClick={() => {
								window.open("/chat", "_blank");
							}}
						></i>
					);

					if (context.isLiveStream) {
						minimumBtn = null;
						duplicateBtn = null;
						disposeBtn = null;
					}

					const btn = (
						<div className={`dropdown${context.minimum ? " dropstart" : ""}`}>
							<i
								style={chatsHeaderToggleButtonStyle(dotsIcon, theme)}
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							></i>
							<ul className="dropdown-menu">
								<li>
									<button className="dropdown-item" type="button">
										{minimumBtn}
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										{duplicateBtn}
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										{fullscreen}
									</button>
								</li>
							</ul>
						</div>
					);

					return (
						<>
							{btn}
							{disposeBtn}
							<CometChatToastNotification
								ref={(el) => (this.toastRef = el)}
								lang={this.props.lang}
							/>
						</>
					);
				}}
			</CometChatContext.Consumer>
		);
	}
}
