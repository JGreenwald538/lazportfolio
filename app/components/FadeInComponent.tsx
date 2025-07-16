"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInSection({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.2, // adjust how much of the section must be visible
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`transition-opacity duration-1000 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			} ${className}`}
		>
			{children}
		</div>
	);
}
