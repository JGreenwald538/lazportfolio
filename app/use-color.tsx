"use client";

import { useContext } from "react";
import PreviousColorContext from "./context";

export default function useColor() {
	const consumer = useContext(PreviousColorContext);

	if (!consumer) {
		throw new Error("useColor must be used within a ColorProvider");
	}

	return consumer;
}
