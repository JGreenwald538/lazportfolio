import Link from "next/link";

const borderClasses: { [key: string]: string } = {
	yellow: "border-r-yellow-400",
	red: "border-r-red-400",
	blue: "border-r-blue-400",
};

export default function Home({ borderColor }: { borderColor: string }) {
	const borderClass = borderClasses[borderColor] || "border-r-gray-400";

	return (
		<div
			className={`h-screen w-fit ${borderClass} border-r-2 py-4 pl-4 pr-10 flex flex-col sticky top-0 bg-slate-900`}
		>
			<div className="flex flex-col mb-4">
				<div className="rounded-full border-white border-2 w-20 h-20 flex justify-center items-center">
					Logo
				</div>
				<div className="text-xl">Laz</div>
				<div className="text-xl">Racusin</div>
			</div>
			<div className="flex-grow flex flex-col justify-center items-start space-y-2">
				<Link href={"/"} className="hover:text-yellow-400">
					Typography
				</Link>
				<Link href={"/albumworks"} className="hover:text-blue-400">
					Album Work
				</Link>
				<Link href={"/posters"} className="hover:text-red-400">
					Posters
				</Link>
			</div>
		</div>
	);
}
