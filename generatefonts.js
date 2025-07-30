import fs from "fs";
import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fontkit = require("fontkit");


const fontDir = "./app/fonts/FlorenceSans";
const outputCssFile = "./fonts"; // adjust to your structure

const files = fs
	.readdirSync(fontDir)
	.filter((f) => f.endsWith(".ttf") || f.endsWith(".otf"));

function getFontMeta(filePath) {
	const font = fontkit.openSync(filePath);

	const postscriptName = font.postscriptName;
	const familyName = font.familyName || "CustomFont";
	const styleName = font.subfamilyName || "Regular";
	const weight = font["OS/2"]?.usWeightClass || 400;
	const italicAngle = font.italicAngle || 0;
	const style =
		italicAngle !== 0 || /italic/i.test(styleName) ? "italic" : "normal";

	return {
		familyName,
		fileName: path.basename(filePath),
		fontPath: filePath.replace(/^public/, ""),
		weight,
		style,
		postscriptName,
	};
}

const fontFaces = files.map((file) => {
	const meta = getFontMeta(path.join(fontDir, file));

	return `@font-face {
  font-family: '${meta.familyName}';
  src: url('${meta.fontPath}') format('truetype');
  font-weight: ${meta.weight};
  font-style: ${meta.style};
  font-display: swap;
}`;
});

fs.writeFileSync(outputCssFile, fontFaces.join("\n\n"), "utf8");
console.log(
	`✅ Wrote ${fontFaces.length} @font-face declarations to ${outputCssFile}`
);
