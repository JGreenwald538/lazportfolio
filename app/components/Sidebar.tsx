import Link from "next/link";

const borderClasses: { [key: string]: string } = {
	typography: "border-r-yellow-400",
	albumWork: "border-r-red-400",
	posters: "border-r-blue-400",
};

export default function Sidebar({ screen }: { screen: string }) {
	const borderClass = borderClasses[screen] || "border-r-gray-400";

	return (
		<div
			className={`h-screen w-fit ${borderClass} py-4 pl-6 pr-12 flex flex-col sticky top-0 bg-slate-900/50`}
		>
			<div className="flex flex-col mb-4">
				<div className="rounded-full border-white border-2 w-20 h-20 flex justify-center items-center">
					Logo
				</div>
				<div className="text-xl mt-4">Laz</div>
				<div className="text-xl">Racusin</div>
			</div>
			<div className="flex-grow flex flex-col justify-center items-start space-y-2">
				<Link
					href={"/"}
					className={`${
						screen === "typography" ? "" : "hover:"
					}text-yellow-400`}
				>
					Typography
				</Link>
				<Link
					href={"/albumworks"}
					className={`${screen === "albumWorks" ? "" : "hover:"}text-blue-400`}
				>
					Album Work
				</Link>
				<Link
					href={"/posters"}
					className={`${
						screen === "posters" ? "" : "hover:"
					}text-red-400`}
				>
					Posters
				</Link>
			</div>
		</div>
	);
}
