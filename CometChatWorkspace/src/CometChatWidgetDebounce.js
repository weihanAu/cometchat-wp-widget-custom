export default class CometChatWidgetDebounce {
	fn = null;
	timer = null;
	debounce(fn, timeout = 0) {
		this.fn = fn;

		if (this.timer) clearTimeout(this.timer);

		this.timer = setTimeout(() => {
			if (this.fn) {
				this.fn.call({});
				this.fn = null;
			}
			this.timer = null;
		}, timeout);
	}
}
