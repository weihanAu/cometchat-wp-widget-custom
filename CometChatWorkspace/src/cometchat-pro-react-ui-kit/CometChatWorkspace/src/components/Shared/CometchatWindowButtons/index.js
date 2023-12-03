import React from "react";
import { CometChatContext } from "../../../util/CometChatContext";
import dashIcon from "./resources/dash.svg";
import xIcon from "./resources/x.svg";
import upIcon from "./resources/up.svg";
import copyIcon from "./resources/copy.svg";
import {
	chatsHeaderDisposeStyle,
	chatsHeaderDuplicateStyle,
	chatsHeaderMinimumStyle,
} from "./style";
import { theme } from "../../../resources/theme";

export class CometchatWindowButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	minimumCometChatWindow = () => {
		this.props.context.setMinimum();
	};

	duplicateCometChatWindow = () => {
		// if (window.CometChatWidgetCount >= 3) {
		// 	this.toastRef.setError("Can't Open CometChat Widget More Than Three");

		// 	return;
		// }

		window.init(false);
	};

	disposeCometChatWindow = () => {
		if (!this.props.context.targetElement) return;
		// if (window.CometChatWidgetCount <= 1) {
		// 	this.toastRef.setError("Can't Close CometChat Widget Less Than One");
		// 	return;
		// }
		// this.props.context.targetElement.remove();
		// window.window.CometChatWidgetCount--;
		var parentElement = this.props.context.targetElement.parentNode;
		window.destoryChat(parentElement.id);
	};

	render() {
		let minimumBtn = (
			<i
				style={chatsHeaderMinimumStyle(
					this.props.context.minimum ? upIcon : dashIcon,
					theme
				)}
				onClick={this.minimumCometChatWindow}
			></i>
		);
		let disposeBtn = (
			<i
				style={chatsHeaderDisposeStyle(xIcon, theme)}
				onClick={this.disposeCometChatWindow}
			></i>
		);

		let duplicateBtn = (
			<i
				style={chatsHeaderDuplicateStyle(copyIcon, theme)}
				onClick={this.duplicateCometChatWindow}
			></i>
		);

		if (this.props.context.isLiveStream) {
			minimumBtn = null;
			duplicateBtn = null;
			disposeBtn = null;
		}

		return (
			<>
				{minimumBtn}
				{duplicateBtn}
				{disposeBtn}
			</>
		);
	}
}
