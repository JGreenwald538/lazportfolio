import Link from "next/link";

export default function CtaLink({
	href,
	children,
	variant = "primary",
	download,
	target,
}: {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	download?: string | boolean;
	target?: string;
}) {
	const classes = `inline-flex items-center justify-center px-6 py-3 rounded-md font-outfit font-semibold transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
		variant === "primary"
			? "bg-white text-slate-950"
			: "border-2 border-white text-white hover:bg-white/10"
	}`;

	if (download) {
		return (
			<a href={href} download={download} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} target={target} className={classes}>
			{children}
		</Link>
	);
}
