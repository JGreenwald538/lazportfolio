import type { Metadata } from "next";
import "./globals.css";
import ColorProvider from "./colorProvider";

export const metadata: Metadata = {
	title: "Lazar Racusin | Graphic Designer & Creative Marketer",
	description:
		"Portfolio of Lazar Racusin: album covers, posters, branding, and marketing creative. RIT Advertising & PR +1 MBA student and owner of LazarDesigns.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ColorProvider>
			<html lang="en">
				<body
					className={`font-arboriabook antialiased bg-slate-950 text-white`}
				>
					{typeof window === "undefined" ? children : (<div></div>)}
				</body>
			</html>
		</ColorProvider>
	);
}
