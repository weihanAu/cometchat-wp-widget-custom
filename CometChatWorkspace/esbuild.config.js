const esbuild = require("esbuild");
const path = require("path");

void (async function () {
	const ctx = await esbuild.context({
		entryPoints: ["src/index.js"],
		outdir: "dist",
		bundle: true,
		platform: "browser",
		format: "esm",
		assetNames: "assets/[name]-[hash]",
		loader: {
			".png": "file",
			".svg": "file",
			".jpg": "file",
			".wav": "file",
			".js": "jsx",
		},
		alias: {
			UIKit: path.resolve("src/cometchat-pro-react-ui-kit/"),
		},
		logLevel: "error",
	});

	await ctx.watch({});

	ctx.serve({
		port: 9000,
		servedir: "dist",
	});
})();
