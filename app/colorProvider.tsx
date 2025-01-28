"use client";
import { useState } from "react";
import PreviousColorContext from "./context";

export default function ColorProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [color, setColor] = useState<string>("");

	return (
		<>
			<PreviousColorContext.Provider value={{ color, setColor }}>
				{children}
			</PreviousColorContext.Provider>
		</>
	);
}
